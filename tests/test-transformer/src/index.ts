import { WorkerConnector } from "tgrid";

import { TestGlobal } from "./TestGlobal";
import { TestAutomationController } from "./build/TestAutomationController";
import { TestServant } from "./servant/TestServant";

async function main(): Promise<void> {
  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];

  const exceptions: Error[] = [];

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
