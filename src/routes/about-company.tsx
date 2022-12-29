import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function AboutCompany() {
  return (
    <main>
      <Title>About SolidJS Company</Title>
      <h1>About SolidJS Company</h1>

      <Counter />

      <hr />
      <p>
        <a href="/">Home</a> (links to <code>/</code>)
      </p>
      <hr />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </main>
  );
}
