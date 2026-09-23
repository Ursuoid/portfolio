import { type Component, Suspense } from "solid-js";
import { Navbar, Toaster } from "./components";

const App: Component<{ children: Element }> = (props) => {
  return (
    <div class="flex flex-col h-full">
      <Navbar />
      <Toaster />
      <main class="grow">
        <Suspense>{props.children}</Suspense>
      </main>
    </div>
  );
};

export default App;
