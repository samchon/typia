import { TestProcessFailureTester } from "@typia/template";

/**
 * Verifies fatal asynchronous events cannot leave an automated run successful.
 *
 * The runner's global listeners historically logged uncaught exceptions and
 * unhandled rejections without changing the exit status. A subprocess matrix
 * pins Node's real final status before, during, and after normal completion.
 *
 * 1. Require an ordinary subprocess to finish successfully.
 * 2. Inject both fatal event kinds at three lifecycle boundaries.
 * 3. Require every fatal subprocess to retain diagnostics and exit nonzero.
 *
 * @evidence contracts/testing.md#behavioral-verification TestProcessFailureTester.assert runs a clean control and both uncaughtException/unhandledRejection scenarios before, during and after normal completion. It requires clean zero status and fatal nonzero status plus diagnostic text, so logging alone cannot satisfy the fatal verdict.
 * @evidence contracts/testing.md#independent-expectations The authored child scripts deliberately inject the named fatal event at each lifecycle boundary and the clean script injects none. Parent process status and captured text establish the result independently of the listener's own returned value.
 * @evidence contracts/testing.md#distinguishing-cases The control distinguishes ordinary success; the two real Node event kinds and three completion timings distinguish lost asynchronous failure from correct fatal retention. The shared tester owns the exact child source and assertions.
 * @evidence contracts/testing.md#execution-ownership The suite main explicitly calls this sole exported case before generation and the template tester. Its Node subprocesses are the necessary fatal-event/status boundary, not ttsc compiler fixtures.
 * @evidence contracts/e2e.md#necessary-boundary Node's actual event delivery and final child status must reflect the listener state across completion. A direct mock listener call cannot establish unhandled rejection timing or OS-observable exit status.
 * @evidence contracts/e2e.md#shared-execution One parent invocation executes the small event/timing matrix with the already installed workspace. Each event needs its own child because a fatal state must not contaminate another control; no compiler build, worker or dependency installation occurs per scenario.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each child owns listener state and its deliberate event; the parent synchronously captures completion and diagnostics before proceeding. No fatal process or result is reused as another scenario's state.
 * @evidence contracts/e2e.md#preserved-coverage The original shared tester and direct invocation remain unchanged. The clean control and all six fatal cases still execute; the contract now states the actual process boundary.
 */
export const test_process_fatal_events = (): void => {
  TestProcessFailureTester.assert();
};
