import Editor from "@monaco-editor/react";

const OutputViewer = (props: {
  language: "typescript" | "javascript";
  content: string;
}) => (
  <Editor
    height="100%"
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
    defaultValue={props.content}
    language={props.language}
  />
);
export default OutputViewer;
