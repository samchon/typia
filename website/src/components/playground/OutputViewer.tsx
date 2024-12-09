import Editor from "@monaco-editor/react";

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
    value={props.content}
  />
);
export default OutputViewer;
