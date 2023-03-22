import { MiddlewareInput } from "solid-start/entry-server/StartServer";
import { FETCH_EVENT, FetchEvent, PageEvent } from "solid-start/server/types";
import { internalFetch } from "solid-start/api/internalFetch";

export const useRewriteMiddleware = ({ forward }: MiddlewareInput) => {
  return async (event: FetchEvent) => {
    const pathname = new URL(event.request.url).pathname;
    console.debug("🏣 Requested URL path", pathname);

    // We want to rewrite `/about` to `/about-company`
    if (pathname === "/about") {
      console.debug("🛫 We want to rewrite `/about` to `/about-company`");
      // Let's create a new URL
      const url = new URL(`/about-company`, "http://internal");
      const request = new Request(url.href);

      for (const [key, value] of event.request.headers) {
        request.headers.set(key, value);
      }

      const prevPath = event.request.headers.get("x-solid-referrer");

      let statusCode = 200;
      function setStatusCode(code: number) {
        statusCode = code;
      }
      function getStatusCode() {
        return statusCode;
      }

      let responseHeaders = new Headers({
        "Content-Type": "text/html",
      });

      // We create a new FetchEvent so that the router thinks we are requesting `/about-company`
      const newFetchEvent: PageEvent = Object.freeze({
        request: request,
        prevUrl: prevPath || "",
        routerContext: {},
        tags: [],
        env: event.env,
        $type: FETCH_EVENT,
        responseHeaders,
        setStatusCode: setStatusCode,
        getStatusCode: getStatusCode,
        fetch: internalFetch,
      });

      return forward(newFetchEvent);
    }

    // We don't need to rewrite this path, so we can just forward the event
    return forward(event);
  };
};
