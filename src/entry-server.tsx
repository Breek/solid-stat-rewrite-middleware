import {
  createHandler,
  renderAsync,
  StartServer,
} from "solid-start/entry-server";

import { useRewriteMiddleware } from "~/middlewares/rewrite";

export default createHandler(
  useRewriteMiddleware,
  renderAsync((event) => <StartServer event={event} />)
);
