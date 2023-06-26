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
    <div style={{ margin: 0, marginLeft: 15 }}>
      {highlighted && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<div style="margin: 10px">${highlighted}</div>`,
          }}
          style={{
            backgroundColor: "#1e1e1e",
            overflowX: "auto",
            overflowY: "auto",
            paddingLeft: "15px",
            height: "calc(90vh - 30px)",
            fontFamily: "monospace",
          }}
        ></div>
      )}
    </div>
  );
}
