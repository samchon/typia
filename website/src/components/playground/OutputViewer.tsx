import Editor from "@monaco-editor/react";

import { Singleton } from "tstl";

import { typia_packageJson } from "../../../raw/typia/packageJson";

const version = new Singleton(
  () => typia_packageJson.split(`"version": "`)[1].split(`"`)[0],
);

const OutputViewer = (props: {
  language: "typescript" | "javascript";
  content: string;
  width: string;
  height: string;
}) => (
  <Editor
    width={props.width}
    height={props.height}
    theme="vs-dark"
    options={{
      minimap: {
        enabled: false,
      },
      padding: {
        top: 15,
        bottom: 15,
      },
      readOnly: true,
    }}
    language={props.language}
    path={`output.${props.language === "typescript" ? "ts" : "js"}`}
    value={[
      "/* -----------------------------------------------------------",
      ` Typia Playground`,
      `   - mode: ${
        props.language === "typescript" ? "generation" : "transformation"
      }`,
      `   - version: ${version.get()}`,
      "----------------------------------------------------------- */",
      props.content,
    ].join("\n")}
  />
);
export default OutputViewer;
