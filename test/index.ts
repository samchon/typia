import fs from "fs";

import { DynamicImportIterator } from "./helpers/DynamicImportIterator";
import { IPointer } from "./helpers/IPointer";

async function main(): Promise<void> {
  const counter: IPointer<number> = { value: 0 };
  const exceptions: Error[] = [];

  console.log("-------------------------------------------------------");
  console.log("  TRANSFORMATION TESTING");
  console.log("-------------------------------------------------------");

  exceptions.push(
    ...(await DynamicImportIterator.force(__dirname + "/features", {
      prefix: "test",
      parameters: () => [],
      counter,
    })),
  );

  if (
    fs.existsSync(__dirname + "/generated/output") &&
    process.argv.every((str) => str !== "--skipGenerated")
  ) {
    console.log("-------------------------------------------------------");
    console.log("  GENERATION TESTING");
    console.log("-------------------------------------------------------");

    exceptions.push(
      ...(await DynamicImportIterator.force(__dirname + "/generated/output", {
        prefix: "test",
        parameters: () => [],
        counter,
      })),
    );
  }

  // TERMINATE
  if (exceptions.length === 0) console.log("Success", counter.value);
  else {
    for (const exp of exceptions) console.log(exp);
    process.exit(-1);
  }
}
main().catch((exp) => {
  console.log(exp);
  process.exit(-1);
});
