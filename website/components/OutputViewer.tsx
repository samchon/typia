import { useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";

export function Highlight(props: {
  language: "typescript" | "javascript";
  content: string;
}) {
  const [highlighted, setHighlighted] = useState<string>();
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;
    (async () => {
      const colorized = await monaco.editor.colorize(
        props.content,
        props.language,
        {
          tabSize: 4,
        },
      );
      setHighlighted(colorized);
    })();
  }, [monaco, props.content]);

  return (
    <div>
      {highlighted && (
        <div
          dangerouslySetInnerHTML={{ __html: highlighted }}
          style={{
            backgroundColor: "#1e1e1e",
            overflowX: "auto",
            overflowY: "auto",
            paddingLeft: "15px",
            width: "calc(50vw - 15px)",
            height: "calc(90vh - 25px)",
            fontFamily: "monospace",
          }}
        ></div>
      )}
    </div>
  );
}
