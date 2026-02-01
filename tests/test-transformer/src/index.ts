import { DynamicExecutor } from "@nestia/e2e";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { WorkerConnector } from "tgrid";

import { TestGlobal } from "./TestGlobal";
import { TestAutomationController } from "./build/TestAutomationController";
import { TestServant } from "./servant/TestServant";

async function test_features(props: {
  include: string[];
  exclude: string[];
}): Promise<Error[]> {
  const location: string = path.join(__dirname, "features");
  if (fs.existsSync(location) === false) return [];

  const report: DynamicExecutor.IReport = await DynamicExecutor.validate({
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
      (props.include.length
        ? props.include.some((str) => name.includes(str))
        : true) &&
      (props.exclude.length
        ? props.exclude.every((str) => !name.includes(str))
        : true),
    extension: __filename.substr(-2),
  });
  return report.executions.map((e) => e.error).filter((e) => e !== null);
}

async function main(): Promise<void> {
  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];

  const exceptions: Error[] = await test_features({
    include,
    exclude,
  });

  await TestAutomationController.iterate(async (location) => {
    const connector = new WorkerConnector(null, null, "process");
    await connector.connect(`${__dirname}/servant/index.ts`);

    const servant = connector.getDriver<TestServant>();
    exceptions.push(
      ...(await servant.execute({
        location,
        include,
        exclude,
      })),
    );
    await connector.close();
  });
  if (exceptions.length === 0) {
    console.log("Success");
  } else {
    for (const exp of exceptions) console.log(exp);
    console.log("Failed");
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
