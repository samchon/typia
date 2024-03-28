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
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { version } from "../../../package.json";

import LanguageButton from "../components/playground/LanguageButton";
import OutputViewer from "../components/playground/OutputViewer";
import SourceEditor from "../components/playground/SourceEditor";
import Splitter from "../components/playground/Splitter";
import ConsoleViewer from "../components/playground/ConsoleViewer";
import { ICompilerService } from "../compilers/ICompilerService";
import { Singleton } from "tstl";
import { WorkerConnector } from "tgrid";
import { COMPILER_OPTIONS } from "../compilers/COMPILER_OPTIONS";
import { SCRIPT } from "../../raw/SCRIPT";
import { RAW } from "../../raw/RAW";

const createCompilerService = new Singleton(async () => {
  const connector = new WorkerConnector(null, null);
  await connector.connect("/compilers/index.js");
  return connector.getDriver<ICompilerService>();
});

const Playground = () => {
  const [source, setSource] = useState<string | null>(null);
  const [target, setTarget] = useState<"typescript" | "javascript">(
    "javascript",
  );
  const [output, setOutput] = useState<ICompilerService.IOutput | null>(null);
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

  const handleChange = async (code: string | undefined) => {
    setSource(code ?? "");
    const service = await createCompilerService.get();
    const output: ICompilerService.IOutput = await service.compile(
      target,
      code ?? "",
    );
    if (code?.length && output.success && code !== SCRIPT)
      window.history.replaceState(
        null,
        "Typia Playground",
        `${location.origin}${
          location.pathname
        }?script=${compressToEncodedURIComponent(code)}`,
      );
    setBeautifiedOutput(output);
  };

  const handleTarget = async (target: "typescript" | "javascript") => {
    setTarget(target);
    const service = await createCompilerService.get();
    const output: ICompilerService.IOutput = await service.compile(
      target,
      source ?? "",
    );
    setBeautifiedOutput(output);
  };

  const setBeautifiedOutput = (output: ICompilerService.IOutput) => {
    if (output.success === false) return setOutput(output);
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
      .catch(() => setOutput(output));
  };

  const execute = async () => {
    const service = await createCompilerService.get();
    const res: ICompilerService.IOutput = await service.bundle(source ?? "");
    if (res.success === false)
      return setConsoleBox({
        messages: [
          {
            type: "error",
            value: res.error,
          },
        ],
      });

    const func: Function = new Function("console", res.content);
    const messages: ConsoleViewer.IMessage[] = [];
    func({
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
    });
    setConsoleBox({ messages });
  };

  return (
    <div>
      <Splitter>
        {source !== null && (
          <SourceEditor
            options={COMPILER_OPTIONS}
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
            {target === "javascript"
              ? "Transformation Mode"
              : "Generation Mode"}
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "column",
              overflowY: "hidden",
            }}
          >
            <OutputViewer
              language={target}
              width="100%"
              height="60%"
              content={
                output === null
                  ? ""
                  : output.success === true
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
                                  return [
                                    lines.length,
                                    lines.at(-1)!.length + 1,
                                  ];
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
                width: "100%",
                height: "40%",
                flexDirection: "row",
              }}
            >
              <Button
                fullWidth
                size="large"
                color="primary"
                variant="outlined"
                startIcon={<PlayArrowIcon />}
                style={{ fontWeight: "bold", textDecoration: "underline" }}
                onClick={() => execute()}
              >
                Execute
              </Button>
              <ConsoleViewer messages={consoleBox.messages} />
            </div>
          </div>
        </div>
      </Splitter>
      <footer
        style={{
          display: "flex",
          width: "100%",
          height: "35px",
          backgroundColor: "#222222",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "2px solid skyblue",
          fontSize: "0.9em",
        }}
      >
        <p>
          <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10">
            typia@{version}
          </code>{" "}
          - Made with ❤️ by{" "}
          <a
            href="https://github.com/samchon"
            target="_blank"
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
          >
            Samchon
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Playground;
