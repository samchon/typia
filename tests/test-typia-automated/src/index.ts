import { TestServant } from "@typia/template";
import { WorkerConnector } from "tgrid";

import { TestGlobal } from "./TestGlobal";
import { TestAutomationController } from "./build/TestAutomationController";

async function main(): Promise<void> {
  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];

  const exceptions: Error[] = [];

  await TestAutomationController.iterate(async (location) => {
    console.error("[parent] visit location=", location);
    const connector = new WorkerConnector(null, null, "process");
    try {
      await connector.connect(`${__dirname}/servant/index.ts`);
      console.error("[parent] connected");
    } catch (e) {
      console.error("[parent] connect FAILED:", e);
      return;
    }
    const servant = connector.getDriver<TestServant>();
    try {
      const result = await servant.execute({
        location,
        include,
        exclude,
      });
      console.error("[parent] execute returned", result.length, "errors");
      exceptions.push(...result);
    } catch (e) {
      console.error("[parent] execute threw:", e);
    } finally {
      await connector.close();
    }
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
