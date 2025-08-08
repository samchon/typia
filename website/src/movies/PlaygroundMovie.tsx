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
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { version } from "../../../package.json";

import LanguageButton from "../components/playground/LanguageButton";
import OutputViewer from "../components/playground/OutputViewer";
import SourceEditor from "../components/playground/SourceEditor";
import Splitter from "../components/playground/Splitter";
import ConsoleViewer from "../components/playground/ConsoleViewer";
import TransformOptionsEditor from "../components/playground/TransformOptionsEditor";
import { ICompilerService } from "../compiler/ICompilerService";
import { ITransformOptions } from "../../../src/transformers/ITransformOptions";
import { Singleton } from "tstl";
import { WorkerConnector } from "tgrid";
import { COMPILER_OPTIONS } from "../compiler/COMPILER_OPTIONS";
import { PLAYGROUND_DEFAULT_SCRIPT } from "../components/playground/PLAYGROUND_DEFAULT_SCRIPT";
import external from "../raw/external.json";

const PlaygroundMovie = () => {
  const [source, setSource] = useState<string | null>(null);
  const [target, setTarget] = useState<"typescript" | "javascript">(
    "javascript",
  );
  const [output, setOutput] = useState<ICompilerService.IOutput | null>(null);
  const [consoleBox, setConsoleBox] = useState<ConsoleViewer.IProps>({
    messages: [],
  });
  const [transformOptions, setTransformOptions] = useState<ITransformOptions>({
    finite: false,
    numeric: false,
    functional: false,
    undefined: true,
  });

  useEffect(() => {
    // PARSE QUERY PARAMETER
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search).entries(),
    );
    
    // Parse script
    if (params.script) {
      const normalized = decompressFromEncodedURIComponent(params.script);
      handleChange(normalized ?? PLAYGROUND_DEFAULT_SCRIPT);
    } else handleChange(PLAYGROUND_DEFAULT_SCRIPT);
    
    // Parse transform options
    if (params.options) {
      try {
        const parsed = JSON.parse(decompressFromEncodedURIComponent(params.options) ?? "{}");
        setTransformOptions({
          finite: parsed.finite ?? false,
          numeric: parsed.numeric ?? false,
          functional: parsed.functional ?? false,
          undefined: parsed.undefined ?? true,
        });
      } catch (error) {
        console.warn("Failed to parse transform options from URL:", error);
      }
    }
  }, []);

  const updateURL = (code?: string, options?: ITransformOptions) => {
    const params = new URLSearchParams();
    if (code && code !== PLAYGROUND_DEFAULT_SCRIPT) {
      params.set("script", compressToEncodedURIComponent(code));
    }
    if (options && (options.finite || options.numeric || options.functional || options.undefined !== true)) {
      params.set("options", compressToEncodedURIComponent(JSON.stringify(options)));
    }
    const queryString = params.toString();
    window.history.replaceState(
      null,
      "Typia Playground",
      `${location.origin}${location.pathname}${queryString ? `?${queryString}` : ""}`,
    );
  };

  const handleChange = async (code: string | undefined) => {
    setSource(code ?? "");
    const service = await createCompilerService.get();
    const output: ICompilerService.IOutput =
      target === "javascript"
        ? await service.compile(code ?? "", transformOptions)
        : await service.transform(code ?? "", transformOptions);
    if (code?.length && output.type === "success") {
      updateURL(code, transformOptions);
    }
    setBeautifiedOutput(output);
  };

  const handleTarget = async (target: "typescript" | "javascript") => {
    setTarget(target);
    const service = await createCompilerService.get();
    const output: ICompilerService.IOutput =
      target === "javascript"
        ? await service.compile(source ?? "", transformOptions)
        : await service.transform(source ?? "", transformOptions);
    setBeautifiedOutput(output);
  };

  const handleTransformOptionsChange = async (options: ITransformOptions) => {
    setTransformOptions(options);
    const service = await createCompilerService.get();
    const output: ICompilerService.IOutput =
      target === "javascript"
        ? await service.compile(source ?? "", options)
        : await service.transform(source ?? "", options);
    updateURL(source ?? "", options);
    setBeautifiedOutput(output);
  };

  const setBeautifiedOutput = (output: ICompilerService.IOutput) => {
    if (output.type === "error") return setOutput(output);
    format(
      output.value,
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
      .then((value) => {
        setOutput({
          ...output,
          value,
        });
      })
      .catch(() => setOutput(output));
  };

  const execute = async () => {
    const service = await createCompilerService.get();
    const compiled: ICompilerService.IOutput = await service.bundle(
      source ?? "",
      transformOptions,
    );
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "100%",
          }}
        >
          <TransformOptionsEditor
            options={transformOptions}
            onChange={handleTransformOptionsChange}
          />
          {source !== null && (
            <SourceEditor
              options={COMPILER_OPTIONS}
              imports={Object.entries(external).map(([Key, value]) => [
                `file:///${Key}`,
                value,
              ])}
              script={source}
              setScript={handleChange}
            />
          )}
        </div>
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
              language={output?.type === "error" ? "json" : target}
              width="100%"
              height="60%"
              value={
                output?.type === "error"
                  ? JSON.stringify(output.value, null, 2)
                  : (output?.value ?? "")
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

const createCompilerService = new Singleton(async () => {
  const connector = new WorkerConnector(null, null);
  await connector.connect("/compiler/index.js");
  return connector.getDriver<ICompilerService>();
});

export default PlaygroundMovie;
