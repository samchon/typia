import { TestServant } from "@typia/template";
import cp from "child_process";

import { TestAutomation } from "./TestAutomation";
import { TestGlobal } from "./TestGlobal";

async function main(): Promise<void> {
  await TestAutomation.generate();
  cp.execSync("pnpm build", {
    cwd: TestGlobal.ROOT,
    stdio: "inherit",
  });

  const servant: TestServant = new TestServant();
  const exceptions: Error[] = await servant.execute({
    location: `${TestGlobal.ROOT}/bin/src/features`,
    include: TestGlobal.getArguments("include") ?? [],
    exclude: TestGlobal.getArguments("exclude") ?? [],
    extension: "js",
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
