import Editor from "@monaco-editor/react";

const ResultViewer = (props: ResultViewer.IProps) => (
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
    path={`output.${
      props.language === "typescript"
        ? "ts"
        : props.language === "javascript"
          ? "js"
          : "error"
    }`}
    value={props.value}
  />
);
namespace ResultViewer {
  export interface IProps {
    language: "typescript" | "javascript" | "json";
    value: string;
    width: string;
    height: string;
  }
}
export default ResultViewer;
