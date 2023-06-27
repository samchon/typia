import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import React, { useEffect, useState } from "react";

import { Compiler } from "../utils/Compiler";
import { Expander } from "../utils/Expander";

import { RAW } from "../../raw/RAW";
import { SCRIPT } from "../../raw/SCRIPT";
import { OutputViewer } from "../components/OutputViewer";
import SourceEditor from "../components/SourceEditor";
import { Splitter } from "../components/Splitter";
import layout from "../styles/layout.module.css";

const Playground = () => {
  const [script, setScript] = useState<string | null>(null);
  const [output, setOutput] = useState<Compiler.IOutput | null>(null);

  useEffect(() => {
    // ADJUST THEME CONFIG
    Expander.expand();

    // PARSE QUERY PARAMETER
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries(),
    );
    if (params.script) {
      const normalized = decompressFromEncodedURIComponent(params.script);
      handleChange(normalized ?? SCRIPT);
    } else handleChange(SCRIPT);
  }, []);

  const handleChange = (code: string | undefined) => {
    setScript(code ?? "");
    const output = Compiler.compile(code ?? "");
    if (script !== null && output.type === "success")
      window.history.replaceState(
        null,
        "Typia Playground",
        `${location.origin}${
          location.pathname
        }?script=${compressToEncodedURIComponent(script)}`,
      );
    setOutput(output);
  };

  // const handleCopy = () => {
  //   if (!script) return;
  //   navigator.permissions
  //     .query({ name: "clipboard-write" as PermissionName })
  //     .then((result) => {
  //       if (result.state == "granted" || result.state == "prompt") {
  //         navigator.clipboard.writeText(
  //           location.origin +
  //             location.pathname +
  //             `?script=${compressToEncodedURIComponent(script)}`,
  //         );
  //       }
  //     });
  // };

  return (
    <div>
      <header className={layout.header}>
        <div>
          <h2 style={{ marginTop: 15, marginBottom: 10 }}>Typia Playground</h2>
          <span> Super-easy/fast Runtime Validator </span>
        </div>
        <a href="https://github.com/samchon/typia" target="_blank">
          <img
            src="/images/github.svg"
            width="70"
            height="70"
            style={{ marginTop: 5 }}
          />
        </a>
      </header>
      <Splitter>
        {script !== null && (
          <SourceEditor
            options={Compiler.OPTIONS}
            imports={RAW}
            script={script}
            setScript={handleChange}
          />
        )}
        <OutputViewer
          language="javascript"
          content={
            output === null
              ? ""
              : output.type === "success"
              ? output.content
              : output.error.message
          }
        />
      </Splitter>
      <footer className={layout.footer}>
        <p>
          Made with ❤️ by <a href="https://github.com/samchon">Samchon</a>.
        </p>
      </footer>
    </div>
  );
};

export default Playground;
