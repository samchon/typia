import Editor, { Monaco } from "@monaco-editor/react";
import React from "react";
import ts from "typescript";

const SourceEditor = (props: {
  options: ts.CompilerOptions;
  imports: [string, string][];
  script: string;
  setScript: (code: string | undefined) => void;
}) => {
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    // COMPILER OPTIONS
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
      props.options as any,
    );

    // IMPORT LIBRARIES
    for (const [file, content] of props.imports)
      monaco.languages.typescript.typescriptDefaults.addExtraLib(content, file);

    // SET NEW MODEL
    const model = monaco.editor.createModel(
      props.script,
      "typescript",
      monaco.Uri.parse("file:///main.ts"),
    );
    editor.setModel(model);
  };

  return (
    <Editor
      height="calc(90vh - 25px)"
      theme="vs-dark"
      onMount={handleEditorDidMount}
      onChange={props.setScript}
    />
  );
};

export default SourceEditor;
