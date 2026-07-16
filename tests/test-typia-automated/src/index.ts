import { TestProcessFailure, TestServant } from "@typia/template";
import { WorkerConnector } from "tgrid";

import { TestGlobal } from "./TestGlobal";
import { TestAutomationController } from "./build/TestAutomationController";

async function main(): Promise<void> {
  const include: string[] = TestGlobal.getArguments("include") ?? [];
  const exclude: string[] = TestGlobal.getArguments("exclude") ?? [];

  const exceptions: Error[] = [];

  await TestAutomationController.iterate(async (location) => {
    const connector = new WorkerConnector(null, null, "process");
    await connector.connect(`${TestGlobal.ROOT}/src/servant/index.ts`);
    const servant = connector.getDriver<TestServant>();
    try {
      exceptions.push(
        ...(await servant.execute({
          location,
          include,
          exclude,
        })),
      );
    } catch (e) {
      exceptions.push(e as Error);
    } finally {
      await connector.close();
    }
  });
  if (exceptions.length === 0 && failure.failed() === false) {
    console.log("Success");
  } else {
    for (const exp of exceptions) console.log(exp);
    console.log("Failed");
    process.exit(-1);
  }
}

const failure: TestProcessFailure.IListener = TestProcessFailure.listen();
main().catch((error) => {
  console.log("critical error", error);
  process.exit(-1);
});
