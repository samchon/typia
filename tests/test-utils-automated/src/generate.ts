import { TestAutomation } from "./TestAutomation";

/**
 * Materializes the OpenAPI validation matrices without executing their cases.
 *
 * Evidence needs declarations that are absent from a fresh checkout. The normal
 * generator owns fixture eligibility and both ordinary/equality variants, so
 * preparation delegates to it instead of inventing a coverage list.
 *
 * @evidence contracts/common.md#principled-implementation Awaiting the normal generator establishes the complete validate/validateEquals files under its existing fixture-selection rules before analysis begins. This entry does not invoke a worker or claim those rules prove validation behavior.
 * @evidence contracts/common.md#clear-and-simple-design One awaited generator call owns preparation; its existing selection and writers remain the only source of generated case inputs and names.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No authored case is copied, excluded or substituted to make Evidence pass. Generation errors reject and prevent analysis from treating preparation as successful.
 * @evidence contracts/common.md#meaningful-documentation Native prose explains fresh-checkout absence, the two matrices and the non-executing preparation boundary. Contract tags remain separate from useful descriptive prose.
 */
export async function generate(): Promise<void> {
  await TestAutomation.generate();
}

generate().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
