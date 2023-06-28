import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import React, { useEffect, useState } from "react";

import { Compiler } from "../utils/Compiler";

import { RAW } from "../../raw/RAW";
import { SCRIPT } from "../../raw/SCRIPT";
import OutputViewer from "../components/OutputViewer";
import SourceEditor from "../components/SourceEditor";
import Splitter from "../components/Splitter";

const Playground = () => {
  const [script, setScript] = useState<string | null>(null);
  const [output, setOutput] = useState<Compiler.IOutput | null>(null);

  useEffect(() => {
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
    if (code?.length && output.type === "success")
      window.history.replaceState(
        null,
        "Typia Playground",
        `${location.origin}${
          location.pathname
        }?script=${compressToEncodedURIComponent(code)}`,
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
  );
};

export default Playground;
