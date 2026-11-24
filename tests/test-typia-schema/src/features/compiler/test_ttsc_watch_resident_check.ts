import assert from "node:assert/strict";
import { type ChildProcess, spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

/**
 * Verifies `ttsc --noEmit --watch` keeps one resident typia host across saves.
 *
 * typia's descriptor declares `residentCheck`, so the installed launcher starts
 * typia's analysis `check` as `check-serve` and keeps it between cycles. The
 * native unit cases drive check-serve in process; only the installed launcher
 * shows that the capability and the command reach each other.
 *
 * 1. Start the installed launcher in no-emit watch over a typia project.
 * 2. Save a compatible edit, an invalid typia call and the fix.
 * 3. Require every reply from one typia process, with one Program load and one
 *    more incremental update per save, and the typia diagnostic on the failure.
 *
 * @evidence contracts/testing.md#behavioral-verification The installed launcher's own resident replies must come from one typia process whose Program is loaded once and updated once per save, and the failing save must print typia's transform diagnostic; a host restarted per cycle, a reload per save or a lost diagnostic fails an assertion.
 * @evidence contracts/testing.md#independent-expectations The resident check protocol fixes the counters (one load, one update per compatible edit, a stable pid); the authored generic typia.is call must fail at src/main.ts:3:9 and its fix must pass.
 * @evidence contracts/testing.md#distinguishing-cases The first cycle loads, a compatible edit updates, an invalid call fails and its fix passes again; the native unit cases own reloads, invalidation, linked ProgramPlugins and the cold-check equality of every answer.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor runs this E2E case through the schema workspace start command; its child is the installed ttsc launcher, which starts the native typia host itself.
 * @evidence contracts/e2e.md#necessary-boundary Only the installed launcher reads the descriptor's residentCheck capability and starts check-serve over real pipes; in-process unit calls cannot show that typia's descriptor and command dispatch meet the launcher.
 * @evidence contracts/e2e.md#shared-execution One watch session and one fixture serve all saves; the native plugin comes from the workspace cache that the suite's own launch already built.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The test-owned fixture lives under the workspace and is removed afterwards; inherited runtime protocol variables are cleared while the caller's cache selection is kept, and each save waits for the previous cycle's reply.
 * @evidence contracts/e2e.md#preserved-coverage This case adds the launcher-to-host connection; reply contents beyond residency and the failing diagnostic stay with TestCheckServeMatchesColdCheck and TestCheckServeReloadsWithProgramPlugin.
 */
export const test_ttsc_watch_resident_check = async (): Promise<void> => {
  const requireFrom = createRequire(path.join(process.cwd(), "package.json"));
  const launcher = path.join(
    path.dirname(requireFrom.resolve("ttsc/package.json")),
    "lib/launcher/ttsc.js",
  );
  const root = fs.mkdtempSync(path.join(process.cwd(), ".resident-check-"));
  const write = (name: string, text: string): void => {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, text);
  };
  const valid = (field: string): string => `import typia from "typia";
export const check = (input: unknown): input is { ${field}: number } =>
  typia.is<{ ${field}: number }>(input);
`;
  const env: NodeJS.ProcessEnv = { ...process.env };
  // An enclosing ttsx run carries private protocol variables and NODE_OPTIONS
  // preloads for itself; the cache selection is the caller's and stays.
  for (const key of Object.keys(env)) {
    const name = process.platform === "win32" ? key.toUpperCase() : key;
    if (
      name === "NODE_OPTIONS" ||
      ((name.startsWith("TTSC_") || name.startsWith("TTSX_")) &&
        name !== "TTSC_CACHE_DIR" &&
        name !== "TTSC_GO_CACHE_DIR")
    )
      delete env[key];
  }
  env.TTSC_WATCH_DEBUG_INPUTS = "1";

  type Reply = {
    plugin: string;
    pid: number;
    programLoads: number;
    programUpdates: number;
    reused: boolean;
  };
  const replies: Reply[] = [];
  let output = "";
  let child: ChildProcess | undefined;
  // Waits for the cycle's typia reply and its completion line. A cycle that
  // completes without a reply ran typia one-shot; the grace period only
  // absorbs the order in which the two output pipes arrive.
  const settle = async (count: number, label: string): Promise<string> => {
    const deadline = Date.now() + (count === 1 ? 1_200_000 : 120_000);
    let completed: number | undefined;
    for (;;) {
      const complete = /watch build (complete|failed)/.test(output);
      if (complete && replies.length >= count) break;
      if (complete) completed ??= Date.now();
      if (
        Date.now() > deadline ||
        child?.exitCode !== null ||
        (completed !== undefined && Date.now() - completed > 5_000)
      )
        throw new Error(`${label}: no typia resident reply\n${output}`);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const text = output;
    output = "";
    return text;
  };
  try {
    write(
      "package.json",
      JSON.stringify({ private: true, dependencies: { typia: "*" } }),
    );
    write(
      "tsconfig.json",
      JSON.stringify({
        compilerOptions: {
          target: "es2022",
          module: "commonjs",
          moduleResolution: "bundler",
          strict: true,
          skipLibCheck: true,
          types: [],
          noEmit: true,
        },
        include: ["src"],
      }),
    );
    write("src/main.ts", valid("value"));
    write("src/other.ts", valid("other"));
    child = spawn(process.execPath, [launcher, "--noEmit", "--watch"], {
      cwd: root,
      env,
      stdio: ["ignore", "pipe", "pipe"],
      detached: process.platform !== "win32",
    });
    let buffered = "";
    const read = (chunk: Buffer): void => {
      buffered += chunk.toString();
      const lines = buffered.split("\n");
      buffered = lines.pop()!;
      for (const line of lines) {
        output += line + "\n";
        const reply = /\[ttsc:debug\] resident reply (\{.*\})/.exec(line);
        if (reply !== null) {
          const value: Reply = JSON.parse(reply[1]!);
          if (value.plugin === "typia") replies.push(value);
        }
      }
    };
    child.stdout!.on("data", read);
    child.stderr!.on("data", read);

    await settle(1, "first cycle");
    const [first] = replies;
    assert.equal(first!.programLoads, 1, JSON.stringify(first));
    assert.equal(first!.reused, false, JSON.stringify(first));

    const saves: [string, string, RegExp | null][] = [
      ["compatible edit", valid("renamed"), null],
      [
        "invalid call",
        `import typia from "typia";
export function generic<T>(input: T): boolean {
  return typia.is<T>(input);
}
`,
        /src[\\/]main\.ts:3:9 - error TS\(typia\.is\)/,
      ],
      ["fix", valid("value"), null],
    ];
    for (const [index, [label, source, diagnostic]] of saves.entries()) {
      write("src/main.ts", source);
      const text = await settle(index + 2, label);
      const reply = replies[index + 1]!;
      assert.deepEqual(
        [reply.pid, reply.programLoads, reply.programUpdates, reply.reused],
        [first!.pid, 1, index + 1, true],
        `${label}: ${JSON.stringify(reply)}`,
      );
      if (diagnostic === null) assert.doesNotMatch(text, /error TS/, label);
      else assert.match(text, diagnostic, label);
    }
  } finally {
    if (child?.pid !== undefined && child.exitCode === null) {
      const exited = new Promise((resolve) => child!.once("exit", resolve));
      // The launcher's resident hosts are its descendants; stop the tree.
      if (process.platform === "win32")
        spawnSync("taskkill", ["/T", "/F", "/PID", String(child.pid)]);
      else process.kill(-child.pid, "SIGKILL");
      await exited;
    }
    fs.rmSync(root, { recursive: true, force: true });
  }
};
