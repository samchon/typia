import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import prettierBabelPlugin from "prettier/plugins/babel";
import prettierEsTreePlugin from "prettier/plugins/estree";
import prettierTsPlugin from "prettier/plugins/typescript";
import { format } from "prettier/standalone";
import React, { useEffect, useState } from "react";
import ts from "typescript";

import { Compiler } from "../utils/Compiler";

import { RAW } from "../../raw/RAW";
import { SCRIPT } from "../../raw/SCRIPT";
import LanguageButton from "../components/playground/LanguageButton";
import OutputViewer from "../components/playground/OutputViewer";
import SourceEditor from "../components/playground/SourceEditor";
import Splitter from "../components/playground/Splitter";
import { Button } from "@mui/material";
import { Executor } from "../utils/Executor";
import ConsoleViewer from "../components/playground/ConsoleViewer";

const Playground = () => {
  const [source, setSource] = useState<string | null>(null);
  const [target, setTarget] = useState<"typescript" | "javascript">(
    "javascript",
  );
  const [output, setOutput] = useState<Compiler.IOutput | null>(null);
  const [consoleBox, setConsoleBox] = useState<ConsoleViewer.IProps>({
    messages: [],
  });

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
    setSource(code ?? "");
    const output: Compiler.IOutput = Compiler.build(target)(code ?? "");
    if (code?.length && output.type === "success" && code !== SCRIPT)
      window.history.replaceState(
        null,
        "Typia Playground",
        `${location.origin}${
          location.pathname
        }?script=${compressToEncodedURIComponent(code)}`,
      );
    setBeautifiedOutput(output);
  };

  const handleTarget = (target: "typescript" | "javascript") => {
    setTarget(target);
    const output: Compiler.IOutput = Compiler.build(target)(source ?? "");
    setBeautifiedOutput(output);
  };

  const setBeautifiedOutput = (output: Compiler.IOutput) => {
    if (output.type === "error") return setOutput(output);
    format(
      output.content,
      output.target === "javascript"
        ? {
            parser: "babel",
            plugins: [prettierBabelPlugin, prettierEsTreePlugin],
          }
        : {
            parser: "typescript",
            plugins: [prettierTsPlugin, prettierEsTreePlugin],
          },
    )
      .then((content) => {
        setOutput({
          ...output,
          content,
        });
      })
      .catch((err) => {
        console.log(err);
        setOutput(output);
      });
  };

  const execute = async () => {
    const output: Compiler.IOutput = Compiler.build("javascript")(source ?? "");
    if (output.type === "error")
      return setConsoleBox({
        messages: [
          {
            type: "error",
            value: output.error,
          },
        ],
      });

    const messages: ConsoleViewer.IMessage[] = [];
    await Executor.execute({
      error: (...args: any[]) => {
        console.error(...args);
        args.forEach((value) => messages.push({ type: "error", value }));
      },
      log: (...args: any[]) => {
        console.log(...args);
        args.forEach((value) => messages.push({ type: "log", value }));
      },
      warn: (...args: any[]) => {
        console.warn(...args);
        args.forEach((value) => messages.push({ type: "warn", value }));
      },
    })(output.content ?? "");
    setConsoleBox({ messages });
  };

  return (
    <Splitter>
      {source !== null && (
        <SourceEditor
          options={Compiler.OPTIONS}
          imports={RAW}
          script={source}
          setScript={handleChange}
        />
      )}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#222222",
          }}
        >
          <LanguageButton
            language="javascript"
            title="Transformation Mode"
            selected={target === "javascript"}
            onClick={() => handleTarget("javascript")}
          />
          <LanguageButton
            language="typescript"
            title="Generation Mode"
            selected={target === "typescript"}
            onClick={() => handleTarget("typescript")}
          />
        </div>
        <div
          style={{
            width: 20,
            textOrientation: "sideways",
            writingMode: "vertical-rl",
            backgroundColor: "#222222",
            paddingTop: 10,
            color: "white",
          }}
        >
          {target === "javascript" ? "Transformation Mode" : "Generation Mode"}
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <OutputViewer
            language={target}
            width="100%"
            height="calc(100% - 300px)"
            content={
              output === null
                ? ""
                : output.type === "success"
                  ? output.diagnostics.length
                    ? output.diagnostics
                        .map((diag) => {
                          const file: string = "main.ts";
                          const category: string =
                            diag.category === ts.DiagnosticCategory.Warning
                              ? "warning"
                              : diag.category === ts.DiagnosticCategory.Error
                                ? "error"
                                : diag.category ===
                                    ts.DiagnosticCategory.Suggestion
                                  ? "suggestion"
                                  : diag.category ===
                                      ts.DiagnosticCategory.Message
                                    ? "message"
                                    : "unkown";
                          const [line, pos] = diag.file
                            ? (() => {
                                const lines: string[] = diag
                                  .file!.text.substring(0, diag.start)
                                  .split("\n");
                                if (lines.length === 0) return [0, 0];
                                return [lines.length, lines.at(-1)!.length + 1];
                              })()
                            : [0, 0];
                          return `${file}:${line}:${pos} - ${category} TS${diag.code}: ${diag.messageText}`;
                        })
                        .join("\n\n")
                    : output.content
                  : output.error.message
            }
          />
          <div
            style={{
              flexDirection: "row",
            }}
          >
            <Button variant="outlined" fullWidth onClick={() => execute()}>
              Execute
            </Button>
          </div>
          <ConsoleViewer messages={consoleBox.messages} />
        </div>
      </div>
    </Splitter>
  );
};

export default Playground;
