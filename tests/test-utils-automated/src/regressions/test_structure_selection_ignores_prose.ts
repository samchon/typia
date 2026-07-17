import { TestValidator } from "@nestia/e2e";
import fs from "fs";

import { TestAutomation } from "../TestAutomation";
import { TestGlobal } from "../TestGlobal";

/**
 * Verifies fixture prose cannot decide automated matrix membership.
 *
 * `getStructures` used to select fixtures by matching raw source text, so a
 * structure whose comments merely mentioned `never`, `toJSON`, `[key: `, or a
 * `uint32`/`uint64` tag silently left the validate matrix with no signal —
 * coverage loss that no assertion could observe (#2136). `TypeTagRange` carries
 * a doc comment that legitimately reads "must never accept", which the old
 * `content.includes("never")` scan would match, dropping it from both matrices.
 *
 * The guard runs first on purpose: it fails if that prose ever disappears, so
 * this case cannot quietly decay into an oracle that proves nothing.
 *
 * 1. Require the witness fixture to still carry a previously filtered word.
 * 2. Resolve the validate and the equality matrices.
 * 3. Require the witness to remain in both.
 */
export const test_structure_selection_ignores_prose = async (): Promise<void> => {
  const WITNESS = "TypeTagRange";
  const source: string = await fs.promises.readFile(
    `${TestGlobal.ROOT}/../template/src/structures/${WITNESS}.ts`,
    "utf-8",
  );
  // Exactly the condition the removed `content.includes("never")` scan tested,
  // so the guard tracks the real trigger rather than a paraphrase of it.
  TestValidator.equals(
    `${WITNESS} still carries prose the old selector matched`,
    source.includes("never") && WITNESS.includes("never") === false,
    true,
  );
  for (const equals of [false, true])
    TestValidator.equals(
      `${WITNESS} stays in the ${equals ? "equality" : "validate"} matrix`,
      (await TestAutomation.getStructures(equals)).includes(WITNESS),
      true,
    );
};

test_structure_selection_ignores_prose().catch((error) => {
  console.log(error);
  process.exit(-1);
});
