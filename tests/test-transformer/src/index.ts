import { DynamicExecutor } from "@nestia/e2e";
import chalk from "chalk";
import path from "path";

import { TestGlobal } from "./TestGlobal";
import { TestAutomationBuilder } from "./build/TestAutomationBuilder";

async function main(): Promise<void> {
  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];

  const execute = (location: string) =>
    DynamicExecutor.validate({
      prefix: "test_",
      location,
      parameters: () => [],
      onComplete: (exec: DynamicExecutor.IExecution) => {
        const trace = (str: string) =>
          console.log(`  - ${chalk.green(exec.name)}: ${str}`);
        if (exec.value === false) trace(chalk.gray("Pass"));
        else if (exec.error === null) {
          const elapsed: number =
            new Date(exec.completed_at).getTime() -
            new Date(exec.started_at).getTime();
          trace(`${chalk.yellow(elapsed.toLocaleString())} ms`);
        } else trace(chalk.red(exec.error.name));
      },
      filter: (name) =>
        (include.length ? include.some((str) => name.includes(str)) : true) &&
        (exclude.length ? exclude.every((str) => !name.includes(str)) : true),
      extension: "ts",
    });

  await TestAutomationBuilder.generate();
  const automated: DynamicExecutor.IReport = await execute(
    path.join(__dirname, "automated"),
  );
  const features: DynamicExecutor.IReport = await execute(
    path.join(__dirname, "features"),
  );

  const exceptions: Error[] = [...automated.executions, ...features.executions]
    .filter((exec) => exec.error !== null)
    .map((exec) => exec.error!);
  if (exceptions.length === 0) {
    console.log("Success");
    console.log("Elapsed time", automated.time.toLocaleString(), `ms`);
  } else {
    for (const exp of exceptions) console.log(exp);
    console.log("Failed");
    console.log("Elapsed time", automated.time.toLocaleString(), `ms`);
    process.exit(-1);
  }
}

global.process.on("uncaughtException", (error) => {
  console.log("exception", error);
});
global.process.on("unhandledRejection", (error) => {
  console.log("rejection", error);
});
main().catch((error) => {
  console.log("critical error", error);
  process.exit(-1);
});
