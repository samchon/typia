"use client";

import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import prettierBabelPlugin from "prettier/plugins/babel";
import prettierEsTreePlugin from "prettier/plugins/estree";
import prettierTsPlugin from "prettier/plugins/typescript";
import { format } from "prettier/standalone";
import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SettingsIcon from "@mui/icons-material/Settings";
import { version } from "../../../package.json";

import LanguageButton from "../components/playground/LanguageButton";
import ResultViewer from "../components/playground/ResultViewer";
import SourceEditor from "../components/playground/SourceEditor";
import Splitter from "../components/playground/Splitter";
import ConsoleViewer from "../components/playground/ConsoleViewer";
import OptionsModal from "../components/playground/OptionsModal";
import { ICompilerService } from "../compiler/ICompilerService";
import { Singleton } from "tstl";
import { WorkerConnector } from "tgrid";
import { COMPILER_OPTIONS } from "../compiler/COMPILER_OPTIONS";
import { PLAYGROUND_DEFAULT_SCRIPT } from "../components/playground/PLAYGROUND_DEFAULT_SCRIPT";
import external from "../raw/external.json";
import { ITransformOptions } from "typia/lib/transformers/ITransformOptions";
import { PlaygroundExampleStorage } from "../compiler/PlaygroundExampleStorage";

const PlaygroundMovie = () => {
  const [source, setSource] = useState<string | null>(null);
  const [options, setOptions] = useState<ITransformOptions>({
    finite: false,
    numeric: false,
    functional: false,
    undefined: true,
  });
  const [target, setTarget] = useState<"typescript" | "javascript">(
    "javascript",
  );
  const [result, setResult] = useState<ICompilerService.IResult | null>(null);
  const [consoleBox, setConsoleBox] = useState<ConsoleViewer.IProps>({
    messages: [],
  });
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);

  useEffect(() => {
    // PARSE QUERY PARAMETER
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries(),
    );
    if (params.script) {
      const normalized = decompressFromEncodedURIComponent(params.script);
      handleChange(normalized ?? PLAYGROUND_DEFAULT_SCRIPT);
    } else handleChange(PLAYGROUND_DEFAULT_SCRIPT);
  }, []);

  const handleChange = async (source: string | undefined) => {
    setSource(source ?? "");
    const service = await createCompilerService.get();
    const result: ICompilerService.IResult =
      target === "javascript"
        ? await service.compile({
            source: source ?? "",
            options,
          })
        : await service.transform({
            source: source ?? "",
            options,
          });
    if (
      source?.length &&
      result.type === "success" &&
      source !== PLAYGROUND_DEFAULT_SCRIPT
    )
      window.history.replaceState(
        null,
        "Typia Playground",
        `${location.origin}${
          location.pathname
        }?script=${compressToEncodedURIComponent(source)}`,
      );
    setBeautifiedResult(result);
  };

  const handleTarget = async (target: "typescript" | "javascript") => {
    setTarget(target);
    const service = await createCompilerService.get();
    const result: ICompilerService.IResult =
      target === "javascript"
        ? await service.compile({
            source: source ?? "",
            options,
          })
        : await service.transform({
            source: source ?? "",
            options,
          });
    setBeautifiedResult(result);
  };

  const handleOptionsChange = async (newOptions: ITransformOptions) => {
    setOptions(newOptions);
    const service = await createCompilerService.get();
    const result: ICompilerService.IResult =
      target === "javascript"
        ? await service.compile({
            source: source ?? "",
            options: newOptions,
          })
        : await service.transform({
            source: source ?? "",
            options: newOptions,
          });
    setBeautifiedResult(result);
  };

  const setBeautifiedResult = (result: ICompilerService.IResult) => {
    if (result.type === "error") return setResult(result);
    format(
      result.value,
      result.target === "javascript"
        ? {
            parser: "babel",
            plugins: [prettierBabelPlugin, prettierEsTreePlugin],
          }
        : {
            parser: "typescript",
            plugins: [prettierTsPlugin, prettierEsTreePlugin],
          },
    )
      .then((value) => {
        setResult({
          ...result,
          value,
        });
      })
      .catch(() => setResult(result));
  };

  const execute = async () => {
    const service = await createCompilerService.get();
    const compiled: ICompilerService.IResult = await service.bundle({
      source: source ?? "",
    });
    if (compiled.type === "error")
      return setConsoleBox({
        messages: [
          {
            type: "error",
            value: compiled.value,
          },
        ],
      });

    const func: Function = new Function("console", compiled.value);
    const messages: ConsoleViewer.IMessage[] = [];
    func({
      error: (...args: any[]) => {
        console.error(...args);
        args.forEach((value) => messages.push({ type: "error", value }));
        setConsoleBox({ messages });
      },
      info: (...args: any[]) => {
        console.info(...args);
        args.forEach((value) => messages.push({ type: "info", value }));
        setConsoleBox({ messages });
      },
      log: (...args: any[]) => {
        console.log(...args);
        args.forEach((value) => messages.push({ type: "log", value }));
        setConsoleBox({ messages });
      },
      warn: (...args: any[]) => {
        console.warn(...args);
        args.forEach((value) => messages.push({ type: "warn", value }));
        setConsoleBox({ messages });
      },
    });
  };

  return (
    <div>
      <Splitter>
        {source !== null && (
          <SourceEditor
            options={COMPILER_OPTIONS}
            imports={Object.entries({
              ...external,
              ...PlaygroundExampleStorage,
            }).map(([Key, value]) => [`file:///${Key}`, value])}
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
            <div
              style={{
                marginTop: 10,
                marginLeft: 20,
                marginRight: 10,
                width: 50,
              }}
            >
              <Tooltip title="Transform Options">
                <div
                  onClick={() => setOptionsModalOpen(true)}
                  style={{
                    width: 50,
                    height: 50,
                    border: "1px solid #666666",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = "1px solid #999999";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "1px solid #666666";
                  }}
                >
                  <SettingsIcon sx={{ color: "white", fontSize: 28 }} />
                </div>
              </Tooltip>
            </div>
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
            <ResultViewer
              language={result?.type === "error" ? "json" : target}
              width="100%"
              height="60%"
              value={
                result?.type === "error"
                  ? JSON.stringify(result.value, null, 2)
                  : (result?.value ?? "")
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
      <OptionsModal
        open={optionsModalOpen}
        options={options}
        onClose={() => setOptionsModalOpen(false)}
        onSave={handleOptionsChange}
      />
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

const createCompilerService = new Singleton(async () => {
  const connector = new WorkerConnector(null, null);
  await connector.connect("/compiler/index.js");
  return connector.getDriver<ICompilerService>();
});

export default PlaygroundMovie;
