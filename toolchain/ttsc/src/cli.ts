import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { build, check, transform, version, type BuildOptions, type TransformOptions } from "./api";
import { resolveProjectConfig, resolveProjectRoot } from "./project";
import { installHint, resolveBinary } from "./platform";

export function main(argv: readonly string[] = process.argv.slice(2)): number {
  try {
    if (argv.length === 0) {
      return runCompatibleBuild([], false);
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
        return runCompatibleBuild(rest, false);
      case "check":
        return runCompatibleBuild(rest, true);
      case "transform":
        return runTransform(rest);
      case "demo":
        return delegateToNative(argv);
      case "-p":
      case "--project":
        return runCompatibleBuild(argv, false);
      default:
        return runCompatibleBuild(argv, false);
    }
  } catch (error) {
    process.stderr.write(`${formatError(error)}\n`);
    return 2;
  }
}

interface BuildInvocation extends BuildOptions {
  files: string[];
  preserveWatchOutput: boolean;
  watch: boolean;
}

function runCompatibleBuild(argv: readonly string[], checkOnly: boolean): number {
  const options = parseBuildArgs(argv, checkOnly);
  if (options.watch) {
    return runWatch(options, checkOnly);
  }
  if (options.files.length !== 0) {
    return runSingleFile(options);
  }
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

function parseBuildArgs(argv: readonly string[], checkOnly: boolean): BuildInvocation {
  let binary: string | undefined;
  let cwd: string | undefined;
  let emit: boolean | undefined = checkOnly ? false : undefined;
  const files: string[] = [];
  let outDir: string | undefined;
  let preserveWatchOutput = false;
  let quiet = false;
  let rewriteMode: string | undefined;
  let tsconfig: string | undefined;
  let watch = false;

  const rest = [...argv];
  while (rest.length !== 0) {
    const current = rest.shift()!;
    switch (current) {
      case "--emit":
        emit = true;
        break;
      case "--noEmit":
        emit = false;
        break;
      case "--quiet":
        quiet = true;
        break;
      case "-w":
      case "--watch":
        watch = true;
        break;
      case "--preserveWatchOutput":
        preserveWatchOutput = true;
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
      case "-p":
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
        } else if (current === "-w") {
          watch = true;
        } else if (current.startsWith("--rewrite-mode=")) {
          rewriteMode = takeRewriteMode(current.slice("--rewrite-mode=".length));
        } else if (current.startsWith("--tsconfig=")) {
          tsconfig = current.slice("--tsconfig=".length);
        } else if (current.startsWith("--project=")) {
          tsconfig = current.slice("--project=".length);
        } else if (current.startsWith("--preserveWatchOutput=")) {
          preserveWatchOutput = current.slice("--preserveWatchOutput=".length) !== "false";
        } else if (current.startsWith("--binary=")) {
          binary = current.slice("--binary=".length);
        } else if (current.startsWith("-")) {
          throw new Error(`ttsc: unknown option ${current}`);
        } else {
          files.push(current);
        }
        break;
    }
  }
  return {
    binary,
    cwd,
    emit,
    files,
    outDir,
    preserveWatchOutput,
    quiet,
    rewriteMode,
    tsconfig,
    watch,
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
      "  ttsc",
      "  ttsc [file.ts]",
      "  ttsc --watch",
      "  ttsc -p tsconfig.json",
      "  ttsc build [options]",
      "  ttsc check [options]",
      "  ttsc transform --file <path> [options]",
      "  ttsc version",
      "",
      "Options:",
      "  -p, --project <file>   Resolve project settings from this tsconfig",
      "  --tsconfig <file>      Resolve project settings from this tsconfig",
      "  --cwd <dir>            Resolve project-relative paths from this directory",
      "  --emit                 Force emitted files during build",
      "  --noEmit               Force analysis-only build with no file writes",
      "  -w, --watch            Rebuild when project files change",
      "  --preserveWatchOutput  Do not clear the screen between watch rebuilds",
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

function runSingleFile(options: BuildInvocation): number {
  if (options.files.length !== 1) {
    throw new Error("ttsc: single-file mode currently accepts exactly one input file");
  }
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const file = path.resolve(cwd, options.files[0]!);
  const out = resolveSingleFileOut(file, cwd, options.outDir);
  const text = transform({
    binary: options.binary,
    cwd,
    file,
    out,
    rewriteMode: options.rewriteMode,
    tsconfig: options.tsconfig,
  });
  if (!fs.existsSync(out)) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, text, "utf8");
  }
  process.stdout.write(`${path.relative(cwd, out) || path.basename(out)}\n`);
  return 0;
}

function resolveSingleFileOut(file: string, cwd: string, outDir?: string): string {
  const relative = path.relative(cwd, file);
  const jsRelative = relative.replace(/\.[cm]?tsx?$/i, ".js");
  if (outDir) {
    return path.resolve(cwd, outDir, jsRelative);
  }
  return file.replace(/\.[cm]?tsx?$/i, ".js");
}

function runWatch(options: BuildInvocation, checkOnly: boolean): number {
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const root = path.dirname(
    resolveProjectConfig({
      cwd,
      tsconfig: options.tsconfig,
    }),
  );
  const watchRoot = resolveProjectRoot({
    cwd,
    tsconfig: options.tsconfig,
  });
  const directories = collectWatchDirectories(watchRoot);
  const watchers = directories.map((dir) =>
    fs.watch(dir, { persistent: true }, () => trigger()),
  );
  let running = false;
  let rerun = false;
  let timer: NodeJS.Timeout | null = null;

  const runOnce = () => {
    running = true;
    if (!options.preserveWatchOutput) {
      process.stdout.write("\x1bc");
    }
    process.stdout.write(`[ttsc] rebuilding at ${new Date().toLocaleTimeString()}\n`);
    const status =
      options.files.length !== 0
        ? runSingleFile({ ...options, cwd })
        : (() => {
            const result = checkOnly ? check({ ...options, cwd }) : build({ ...options, cwd });
            if (result.stdout) process.stdout.write(result.stdout);
            if (result.stderr) process.stderr.write(result.stderr);
            return result.status;
          })();
    process.stdout.write(`[ttsc] ${status === 0 ? "watch build complete" : "watch build failed"}\n`);
    running = false;
    if (rerun) {
      rerun = false;
      trigger();
    }
  };
  const trigger = () => {
    if (running) {
      rerun = true;
      return;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(runOnce, 60);
  };

  const close = () => {
    if (timer) clearTimeout(timer);
    for (const watcher of watchers) watcher.close();
  };
  process.on("SIGINT", () => {
    close();
    process.exit(0);
  });
  process.on("SIGTERM", () => {
    close();
    process.exit(0);
  });

  process.stdout.write(`[ttsc] watching ${path.relative(cwd, root) || "."}\n`);
  runOnce();
  return 0;
}

function collectWatchDirectories(root: string): string[] {
  const out: string[] = [];
  const stack: string[] = [root];
  while (stack.length !== 0) {
    const current = stack.pop()!;
    out.push(current);
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".git" ||
        entry.name === "lib" ||
        entry.name === "dist"
      ) {
        continue;
      }
      if (entry.isDirectory()) {
        stack.push(path.join(current, entry.name));
      }
    }
  }
  return out;
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
