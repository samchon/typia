import { TestAutomationController } from "./build/TestAutomationController";

/**
 * Materializes the complete native feature matrix without executing its cases.
 *
 * Evidence parses generated declarations before the behavioral runner starts.
 * Its input must come from the same controller, template eligibility and
 * fixture metadata as an ordinary run, including direct and factory forms.
 *
 * @evidence contracts/common.md#principled-implementation The existing controller writes every eligible direct/factory feature set before resolving; a non-executing visitor preserves generation decisions while omitting worker execution. Authored composites remain in place and are independently selected by Evidence.
 * @evidence contracts/common.md#clear-and-simple-design This entry only connects the normal controller to a generation-only command. It adds no second renderer, fixture selector or generated baseline.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Every template and structure goes through the ordinary controller; no consumer name, expected schema or copied output bypasses generation. Preparation failure rejects rather than certifying an absent matrix.
 * @evidence contracts/common.md#meaningful-documentation The comment identifies the generated population, non-execution boundary and reason preparation precedes Evidence. It does not claim behavioral tests or contract checks passed.
 */
export async function generate(): Promise<void> {
  await TestAutomationController.iterate(async () => {});
}

generate().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
