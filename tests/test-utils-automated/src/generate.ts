import { TestAutomation } from "./TestAutomation";

/**
 * Materializes the OpenAPI validation matrices without executing their cases.
 *
 * Evidence needs declarations that are absent from a fresh checkout. The normal
 * generator owns fixture eligibility and both ordinary/equality variants, so
 * preparation delegates to it instead of inventing a coverage list.
 *
 * @evidence contracts/testing.md#behavioral-verification Materializes the normal clean/spoiled and surplus-key entries through TestAutomation.generate. It executes no assertions; start later composes native schema output with the helper checks.
 * @evidence contracts/testing.md#independent-expectations Generation preserves authored fixture/spoiler inputs and helper expectations. This entry produces no expected result and does not certify a prepared declaration as behaviorally correct.
 * @evidence contracts/testing.md#distinguishing-cases Both ordinary and equality populations use their existing membership policies. Clean and invalid distinctions execute in their entries; this preparation function is support code rather than an independent case matrix.
 * @evidence contracts/testing.md#execution-ownership The package generate script and root evidence:prepare invoke this entry. Its single awaited call rejects on preparation failure; the catch sets process.exitCode to 1. The suite start owns subsequent worker execution.
 */
export async function generate(): Promise<void> {
  await TestAutomation.generate();
}

generate().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
