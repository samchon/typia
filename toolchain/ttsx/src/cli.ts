import * as fs from "node:fs";
import Module = require("node:module");
import { spawnSync } from "node:child_process";
import * as path from "node:path";

import {
  prepareExecution,
  register,
  type PreparedExecution,
  type RegisterOptions,
} from "./register";

const VERSION = "0.1.0-dev";

interface ParsedCLI extends RegisterOptions {
  entry: string;
  passthrough: string[];
  preload: string[];
}

export function main(argv: readonly string[] = process.argv.slice(2)): number {
  const parsed = parseCLI(argv);
  if (parsed === "help") {
    printHelp();
    return 0;
  }
  if (parsed === "version") {
    process.stdout.write(`ttsx ${VERSION}\n`);
    return 0;
  }

  const cwd = path.resolve(parsed.cwd ?? process.cwd());
  const entry = path.resolve(cwd, parsed.entry);
  if (!fs.existsSync(entry)) {
    process.stderr.write(`ttsx: entry not found: ${entry}\n`);
    return 2;
  }

  const prepared = prepareExecution(entry, {
    binary: parsed.binary,
    cacheDir: parsed.cacheDir,
    cwd,
    env: parsed.env,
    extensions: parsed.extensions,
    project: parsed.project,
  });
  if (prepared.moduleKind === "esm") {
    return runEsmEntry(parsed, prepared, cwd);
  }

  const unregister = register({
    binary: parsed.binary,
    cacheDir: parsed.cacheDir,
    cwd,
    env: parsed.env,
    extensions: parsed.extensions,
    project: parsed.project,
  });
  process.once("exit", unregister);
  for (const preload of parsed.preload) {
    require(resolvePreload(cwd, preload));
  }
  process.argv = [process.execPath, entry, ...parsed.passthrough];
  Module.runMain();
  return 0;
}

function parseCLI(argv: readonly string[]): ParsedCLI | "help" | "version" {
  const preload: string[] = [];
  const passthroughIndex = argv.indexOf("--");
  const head = passthroughIndex === -1 ? [...argv] : [...argv.slice(0, passthroughIndex)];
  const passthrough = passthroughIndex === -1 ? [] : [...argv.slice(passthroughIndex + 1)];

  let binary: string | undefined;
  let cacheDir: string | undefined;
  let cwd: string | undefined;
  let entry: string | undefined;
  let project: string | undefined;

  while (head.length !== 0) {
    const current = head.shift()!;
    if (entry) {
      passthrough.push(current, ...head);
      break;
    }
    switch (current) {
      case "-h":
      case "--help":
        return "help";
      case "-v":
      case "--version":
        return "version";
      case "-P":
      case "--project":
        project = takeValue(current, head);
        break;
      case "--cwd":
        cwd = takeValue(current, head);
        break;
      case "--cache-dir":
        cacheDir = takeValue(current, head);
        break;
      case "-r":
      case "--require":
        preload.push(takeValue(current, head));
        break;
      case "--binary":
        binary = takeValue(current, head);
        break;
      default:
        if (current.startsWith("--project=")) {
          project = current.slice("--project=".length);
        } else if (current.startsWith("--cwd=")) {
          cwd = current.slice("--cwd=".length);
        } else if (current.startsWith("--cache-dir=")) {
          cacheDir = current.slice("--cache-dir=".length);
        } else if (current.startsWith("--binary=")) {
          binary = current.slice("--binary=".length);
        } else if (current.startsWith("-")) {
          throw new Error(`ttsx: unknown option ${current}`);
                } else {
          entry = current;
        }
        break;
    }
  }

  if (!entry) {
    throw new Error("ttsx: entry file is required");
  }

  return {
    binary,
    cacheDir,
    cwd,
    entry,
    passthrough,
    preload,
    project,
  };
}

function printHelp(): void {
  process.stdout.write(
    [
      "ttsx — ts-node/tsx-style runner built on top of the ttsc host.",
      "",
      "Usage:",
      "  ttsx [options] <entry.ts> [-- <argv...>]",
      "",
      "Options:",
      "  -P, --project <file>   Use an explicit tsconfig.json",
      "  --cwd <dir>            Resolve entry/project relative to this directory",
      "  --cache-dir <dir>      Override the compiled JS cache directory",
      "  --binary <path>        Use an explicit ttsc native binary",
      "  -r, --require <file>   Preload a module before the entrypoint",
      "  -h, --help             Show this help",
      "  -v, --version          Print the runner version",
      "",
      "Runtime:",
      "  CommonJS projects execute in-process via the require hook.",
      "  ESM projects execute the cached emitted entry in a child Node process.",
      "",
      "Examples:",
      "  ttsx src/index.ts",
      "  ttsx --project tsconfig.json src/index.ts -- --port 3000",
    ].join("\n"),
  );
  process.stdout.write("\n");
}

function resolvePreload(cwd: string, preload: string): string {
  if (preload.startsWith(".") || preload.startsWith("/") || preload.includes(path.sep)) {
    return path.resolve(cwd, preload);
  }
  return preload;
}

function takeValue(flag: string, rest: string[]): string {
  const value = rest.shift();
  if (!value) {
    throw new Error(`ttsx: ${flag} requires a value`);
  }
  return value;
}

function runEsmEntry(parsed: ParsedCLI, execution: PreparedExecution, cwd: string): number {
  fs.mkdirSync(execution.emitDir, { recursive: true });
  rewriteEsmSpecifiers(execution.emitDir);
  fs.writeFileSync(
    path.join(execution.emitDir, "package.json"),
    JSON.stringify({ type: "module" }),
    "utf8",
  );
  const args = [
    ...parsed.preload.flatMap((preload) => ["-r", resolvePreload(cwd, preload)]),
    execution.entryFile,
    ...parsed.passthrough,
  ];
  const result = spawnSync(process.execPath, args, {
    stdio: "inherit",
    env: process.env,
    windowsHide: true,
  });
  if (result.error) {
    process.stderr.write(`${result.error.message}\n`);
    return 1;
  }
  return result.status ?? 1;
}

function rewriteEsmSpecifiers(root: string): void {
  const stack = [root];
  while (stack.length !== 0) {
    const current = stack.pop()!;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const next = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(next);
        continue;
      }
      if (!entry.isFile() || !next.endsWith(".js")) {
        continue;
      }
      const before = fs.readFileSync(next, "utf8");
      const after = before
        .replace(
          /\bfrom\s+(['"])(\.[^'"]+)\1/g,
          (_, quote: string, specifier: string) =>
            `from ${quote}${withJsExtension(specifier)}${quote}`,
        )
        .replace(
          /\bimport\(\s*(['"])(\.[^'"]+)\1\s*\)/g,
          (_, quote: string, specifier: string) =>
            `import(${quote}${withJsExtension(specifier)}${quote})`,
        );
      if (after !== before) {
        fs.writeFileSync(next, after, "utf8");
      }
    }
  }
}

function withJsExtension(specifier: string): string {
  if (!specifier.startsWith(".")) {
    return specifier;
  }
  if (/\.(?:[cm]?js|json|node)$/i.test(specifier)) {
    return specifier;
  }
  return `${specifier}.js`;
}
