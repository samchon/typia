import { TestAutomationController } from "./build/TestAutomationController";

/**
 * Materializes the complete native feature matrix without executing its cases.
 *
 * Evidence preparation uses the ordinary controller, template eligibility and
 * fixture metadata, including direct and factory forms. Generated declarations
 * are excluded from Evidence by the approved suite configuration; their
 * callbacks still execute through the behavioral runner.
 *
 * @evidence contracts/testing.md#behavioral-verification This preparation entry performs no behavioral assertion; it awaits ordinary matrix generation and exposes preparation errors to its caller. test_direct_factory_matrix checks the completed output, while generated entries execute callback assertions through TestServant.
 * @evidence contracts/testing.md#independent-expectations No expected callback result is computed here. The controller uses authored operation capabilities and fixture eligibility; behavioral expectations remain with the assertion helpers and composite cases.
 * @evidence contracts/testing.md#distinguishing-cases The entry requests every configured direct/factory family through the same controller as start; its no-op visitor deliberately adds no success, invalid-value or boundary scenario.
 * @evidence contracts/testing.md#execution-ownership The package generate script invokes this exported entry with tsconfig.generate.json. Its anonymous visitor owns no assertion; its top-level rejection handler reports preparation failure with exitCode 1.
 */
export async function generate(): Promise<void> {
  await TestAutomationController.iterate(async () => {});
}

generate().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
