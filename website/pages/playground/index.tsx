import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";

import { Compiler } from "../../compilers/Compiler";
import { Highlight } from "../../components/OutputViewer";
import SourceEditor from "../../components/SourceEditor";
import layout from "../../css/playground/layout.module.css";
import "../../css/playground/resizer.module.css";
import { RAW } from "../../raw/RAW";
import { SCRIPT } from "../../raw/SCRIPT";

const Playground = () => {
  const [script, setScript] = useState<string>(SCRIPT);
  const [output, setOutput] = useState<Compiler.IOutput | null>(null);

  useEffect(() => {
    // CHANGE BODY STYLE
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor = "#1e1e1e";

    // PARSE QUERY PARAMETER
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries(),
    );
    if (params.script) {
      const normalized = decompressFromEncodedURIComponent(params.script);
      if (!normalized) return;
      handleChange(normalized);
    } else handleChange(script);
  }, []);

  const handleChange = (code: string | undefined) => {
    setScript(code ?? "");
    const output = Compiler.compile(code ?? "");
    if (output.type === "success")
      window.history.replaceState(
        null,
        "Typia Playground",
        `${location.origin}${
          location.pathname
        }?script=${compressToEncodedURIComponent(script)}`,
      );
    setOutput(output);
  };

  const Pane = SplitPane as any;

  return (
    <div>
      <header className={layout.header}>
        <div style={{ display: "flex" }}>
          <h2>Typia - Superfast Runtime Validator</h2>
          <button
            className={layout.button}
            onClick={() => {
              if (!script) return;
              navigator.permissions
                .query({ name: "clipboard-write" as PermissionName })
                .then((result) => {
                  if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.writeText(
                      location.origin +
                        location.pathname +
                        `?script=${compressToEncodedURIComponent(script)}`,
                    );
                  }
                });
            }}
          >
            Copy Link
          </button>
        </div>
        <a href="https://github.com/samchon/typia" style={{ fontSize: "24px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </header>
      <Pane split="vertical" defaultSize={"50%"} primary="first">
        <SourceEditor
          options={Compiler.OPTIONS}
          imports={RAW}
          script={script}
          setScript={handleChange}
        />
        <Highlight
          language="javascript"
          content={
            output === null
              ? ""
              : output.type === "success"
              ? output.content
              : output.error.message
          }
        />
      </Pane>
      <footer className={layout.footer}>
        <p>
          Made with ❤️ by <a href="https://github.com/samchon">Samchon</a>.
        </p>
      </footer>
    </div>
  );
};

export default Playground;
