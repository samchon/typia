import { spawnSync } from "node:child_process";
import { build, check, transform, version, type BuildOptions, type TransformOptions } from "./api";
import { installHint, resolveBinary } from "./platform";

export function main(argv: readonly string[] = process.argv.slice(2)): number {
  try {
    if (argv.length === 0) {
      printHelp();
      return 0;
    }

    const [command, ...rest] = argv;
    switch (command) {
      case "-h":
      case "--help":
      case "help":
        printHelp();
        return 0;
      case "-v":
      case "--version":
      case "version":
        process.stdout.write(`${version()}\n`);
        return 0;
      case "build":
        return runBuild(rest, false);
      case "check":
        return runBuild(rest, true);
      case "transform":
        return runTransform(rest);
      case "demo":
        return delegateToNative(argv);
      case "-p":
      case "--project":
        if (rest.length === 0) {
          throw new Error("ttsc: -p/--project requires a path argument");
        }
        return runBuild([`--tsconfig=${rest[0]}`, "--emit", ...rest.slice(1)], false);
      default:
        return delegateToNative(argv);
    }
  } catch (error) {
    process.stderr.write(`${formatError(error)}\n`);
    return 2;
  }
}

function runBuild(argv: readonly string[], checkOnly: boolean): number {
  const options = parseBuildArgs(argv, checkOnly);
  const result = checkOnly ? check(options) : build(options);
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  return result.status;
}

function runTransform(argv: readonly string[]): number {
  const options = parseTransformArgs(argv);
  const text = transform(options);
  if (!options.out) {
    process.stdout.write(text);
  }
  return 0;
}

function delegateToNative(argv: readonly string[]): number {
  const bin = resolveBinary();
  if (!bin) {
    process.stderr.write(`${installHint()}\n`);
    return 1;
  }
  const viaNode = /\.(?:[cm]?js|ts)$/i.test(bin);
  const result = spawnSync(viaNode ? process.execPath : bin, viaNode ? [bin, ...argv] : [...argv], {
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

function parseBuildArgs(argv: readonly string[], checkOnly: boolean): BuildOptions {
  let binary: string | undefined;
  let cwd: string | undefined;
  let emit = checkOnly ? false : false;
  let outDir: string | undefined;
  let quiet = false;
  let rewriteMode: string | undefined;
  let tsconfig: string | undefined;

  const rest = [...argv];
  while (rest.length !== 0) {
    const current = rest.shift()!;
    switch (current) {
      case "--emit":
        emit = true;
        break;
      case "--quiet":
        quiet = true;
        break;
      case "--rewrite-mode":
        rewriteMode = takeRewriteMode(takeValue(current, rest));
        break;
      case "--cwd":
        cwd = takeValue(current, rest);
        break;
      case "--outDir":
        outDir = takeValue(current, rest);
        break;
      case "--tsconfig":
      case "--project":
        tsconfig = takeValue(current, rest);
        break;
      case "--binary":
        binary = takeValue(current, rest);
        break;
      default:
        if (current.startsWith("--cwd=")) {
          cwd = current.slice("--cwd=".length);
        } else if (current.startsWith("--outDir=")) {
          outDir = current.slice("--outDir=".length);
        } else if (current.startsWith("--rewrite-mode=")) {
          rewriteMode = takeRewriteMode(current.slice("--rewrite-mode=".length));
        } else if (current.startsWith("--tsconfig=")) {
          tsconfig = current.slice("--tsconfig=".length);
        } else if (current.startsWith("--project=")) {
          tsconfig = current.slice("--project=".length);
        } else if (current.startsWith("--binary=")) {
          binary = current.slice("--binary=".length);
        } else if (current.startsWith("-")) {
          throw new Error(`ttsc: unknown option ${current}`);
        } else {
          throw new Error(`ttsc: unexpected positional argument ${current}`);
        }
        break;
    }
  }
  return {
    binary,
    cwd,
    emit,
    outDir,
    quiet,
    rewriteMode,
    tsconfig,
  };
}

function parseTransformArgs(argv: readonly string[]): TransformOptions {
  let binary: string | undefined;
  let cwd: string | undefined;
  let file: string | undefined;
  let out: string | undefined;
  let rewriteMode: string | undefined;
  let tsconfig: string | undefined;

  const rest = [...argv];
  while (rest.length !== 0) {
    const current = rest.shift()!;
    switch (current) {
      case "--binary":
        binary = takeValue(current, rest);
        break;
      case "--cwd":
        cwd = takeValue(current, rest);
        break;
      case "--file":
        file = takeValue(current, rest);
        break;
      case "--out":
        out = takeValue(current, rest);
        break;
      case "--rewrite-mode":
        rewriteMode = takeRewriteMode(takeValue(current, rest));
        break;
      case "--tsconfig":
      case "--project":
        tsconfig = takeValue(current, rest);
        break;
      default:
        if (current.startsWith("--binary=")) {
          binary = current.slice("--binary=".length);
        } else if (current.startsWith("--cwd=")) {
          cwd = current.slice("--cwd=".length);
        } else if (current.startsWith("--file=")) {
          file = current.slice("--file=".length);
        } else if (current.startsWith("--out=")) {
          out = current.slice("--out=".length);
        } else if (current.startsWith("--rewrite-mode=")) {
          rewriteMode = takeRewriteMode(current.slice("--rewrite-mode=".length));
        } else if (current.startsWith("--tsconfig=")) {
          tsconfig = current.slice("--tsconfig=".length);
        } else if (current.startsWith("--project=")) {
          tsconfig = current.slice("--project=".length);
        } else {
          throw new Error(`ttsc: unknown option ${current}`);
        }
        break;
    }
  }
  if (!file) {
    throw new Error("ttsc: transform requires --file");
  }
  return {
    binary,
    cwd,
    file,
    out,
    rewriteMode,
    tsconfig,
  };
}

function printHelp(): void {
  process.stdout.write(
    [
      "ttsc — standalone compiler adapter and plugin host for tsgo.",
      "",
      "Usage:",
      "  ttsc build [options]",
      "  ttsc check [options]",
      "  ttsc transform --file <path> [options]",
      "  ttsc version",
      "",
      "Options:",
      "  --tsconfig <file>      Resolve project settings from this tsconfig",
      "  --cwd <dir>            Resolve project-relative paths from this directory",
      "  --emit                 Write emitted files during build",
      "  --outDir <dir>         Override compilerOptions.outDir for this invocation",
      "  --rewrite-mode <mode>  Native rewrite backend id",
      "  --quiet                Suppress the native per-call summary banner",
      "  --out <path>           Write transform output to a file instead of stdout",
      "  --binary <path>        Use an explicit native backend binary",
      "",
      "Plugin contract:",
      "  ttsc reads compilerOptions.plugins from tsconfig.json.",
      "  TS plugins may export `definePlugin(...)` from @typia/ttsc/plugin.",
      "  Native consumer plugins may also provide their own binary path.",
    ].join("\n"),
  );
  process.stdout.write("\n");
}

function takeValue(flag: string, rest: string[]): string {
  const value = rest.shift();
  if (!value) {
    throw new Error(`ttsc: ${flag} requires a value`);
  }
  return value;
}

function takeRewriteMode(value: string): string {
  if (value.length === 0) {
    throw new Error("ttsc: rewrite mode must not be empty");
  }
  return value;
}

function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
