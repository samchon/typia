import typia from "typia";

/**
 * Supplies an unresolved generic evaluation target for the diagnostic suite.
 *
 * Record's open constraint does not give the transformer concrete properties to
 * evaluate. The fixture must typecheck and reach the native rejection path.
 *
 * 1. Compile this fixture together with the invalid-call matrix.
 * 2. Require its source to be named by a typia diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification The suite requires the project build to fail without ordinary compiler diagnostics and requires a typia diagnostic naming this source. evaluate supplies the unresolved T target; it is not invoked as a runtime test.
 * @evidence contracts/testing.md#independent-expectations The authored generic parameter has no concrete property set. The harness compares the reported accessor identity against this source rather than emitted JavaScript or a cached verdict.
 * @evidence contracts/testing.md#distinguishing-cases This fixture owns an unresolved generic Record constraint. Concrete accepted evaluations and other rejection reasons belong to separate native units; the harness does not independently assert this rejection's complete message.
 * @evidence contracts/testing.md#execution-ownership test-error/index.js compiles the complete src project once and checks its diagnostics. The build is the real native transform boundary, and no generated runtime artifact is expected from an atomic failed build.
 * @evidence contracts/e2e.md#necessary-boundary Valid TypeScript must reach the native typia.llm.evaluation transform and be rejected; a handwritten error cannot establish compiler admission or API diagnostic binding.
 * @evidence contracts/e2e.md#shared-execution All invalid-call fixtures share one project build and installed workspace/native artifact. This declaration starts no compiler or process itself.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The fixture is read-only and has no runtime mutation. The harness checks the captured build diagnostics; native artifact content identity and compiler teardown belong to ttsc and the parent process.
 * @evidence contracts/e2e.md#preserved-coverage The generic declaration and evaluation call remain unchanged. Acknowledgments expose the existing per-source diagnostic granularity without substituting runtime or weaker success checks.
 */
export const evaluate = <T extends Record<string, any>>() =>
  typia.llm.evaluation<T>();
