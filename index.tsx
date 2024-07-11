import * as React from "react";
import { createRoot } from "react-dom/client";
import { LoaderCircle } from "lucide-react";
import { RemoveScroll } from "react-remove-scroll";

function App() {
  return (
    <>
      <style>
        {`@keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }`}
      </style>
      <RemoveScroll>
        <LoaderCircle
          size={96}
          style={{
            display: "block",
            margin: "auto",
            animation: "spin 1s linear infinite",
          }}
        />
      </RemoveScroll>
    </>
  );
}

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(<App />);
