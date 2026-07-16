import cp from "child_process";

import { TestProcessFailure } from "./TestProcessFailure";

export namespace TestProcessFailureTester {
  export const assert = (): void => {
    const normal: cp.SpawnSyncReturns<string> = execute(null, null);
    if (
      normal.status !== 0 ||
      normal.signal !== null ||
      normal.error !== undefined
    )
      throw new Error(
        `Normal process unexpectedly failed (${normal.status}).\n${output(normal)}`,
      );
    if (output(normal).includes("failure-state:false") === false)
      throw new Error(
        `Normal process lost its clean state.\n${output(normal)}`,
      );

    for (const event of ["uncaughtException", "unhandledRejection"] as const)
      for (const phase of ["before", "during", "after"] as const) {
        const result: cp.SpawnSyncReturns<string> = execute(event, phase);
        if (
          result.status !== 1 ||
          result.signal !== null ||
          result.error !== undefined
        )
          throw new Error(
            `${event} during ${phase} lifecycle exited with ${result.status}.\n${output(result)}`,
          );
        const label: string =
          event === "uncaughtException" ? "exception" : "rejection";
        if (
          output(result).includes(label) === false ||
          output(result).includes(MARKER) === false
        )
          throw new Error(
            `${event} during ${phase} lifecycle lost its diagnostic.\n${output(result)}`,
          );
        if (output(result).includes("failure-state:true") === false)
          throw new Error(
            `${event} during ${phase} lifecycle lost its fatal state.\n${output(result)}`,
          );
      }
  };

  const execute = (
    event: "uncaughtException" | "unhandledRejection" | null,
    phase: "before" | "during" | "after" | null,
  ): cp.SpawnSyncReturns<string> =>
    cp.spawnSync(process.execPath, ["-e", script(event, phase)], {
      encoding: "utf8",
      timeout: 5_000,
    });

  const script = (
    event: "uncaughtException" | "unhandledRejection" | null,
    phase: "before" | "during" | "after" | null,
  ): string => `
    const failure = (${TestProcessFailure.listen.toString()})();
    process.on("beforeExit", () =>
      console.log("failure-state:" + failure.failed()),
    );
    const trigger = () => {
      if (${JSON.stringify(event)} === "uncaughtException")
        queueMicrotask(() => { throw new Error(${JSON.stringify(MARKER)}); });
      else if (${JSON.stringify(event)} === "unhandledRejection")
        void Promise.reject(new Error(${JSON.stringify(MARKER)}));
    };
    if (${JSON.stringify(phase)} === "before") {
      trigger();
      setImmediate(() => console.log("Success"));
    } else if (${JSON.stringify(phase)} === "during") {
      setImmediate(trigger);
      setTimeout(() => console.log("Success"), 5);
    } else if (${JSON.stringify(phase)} === "after") {
      console.log("Success");
      setImmediate(trigger);
    } else console.log("Success");
  `;

  const output = (result: cp.SpawnSyncReturns<string>): string =>
    `${result.stdout ?? ""}${result.stderr ?? ""}${
      result.error === undefined
        ? ""
        : `${result.error.name}: ${result.error.message}\n`
    }signal: ${result.signal ?? "none"}`;

  const MARKER = "injected fatal test event";
}
