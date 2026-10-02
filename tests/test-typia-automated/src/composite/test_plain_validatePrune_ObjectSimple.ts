import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_validatePrune } from "../internal/_test_plain_validatePrune";

/**
 * Verifies the native validation pruner preserves data and reports fixture
 * errors.
 *
 * Portable callback units cannot prove that the transformer emits a working
 * ObjectSimple pruner and connects its success/error reports to the consumer.
 *
 * 1. Produce the actual ObjectSimple validation-pruning callback.
 * 2. Check successful surplus removal and original-data reporting.
 * 3. Exercise all authored spoilers and require their error-path population.
 *
 * @evidence contracts/testing.md#behavioral-verification The real typia.plain.validatePrune<ObjectSimple> callback runs through the shared/native helper. Successful mutation/report assertions and every authored invalid-path comparison distinguish correct producer behavior from missing pruning, foreign success data or lost diagnostics.
 * @evidence contracts/testing.md#independent-expectations ObjectSimple's authored generator/spoilers establish valid data and expected invalid paths. The successful IValidation report contract and pre-mutation graph establish independent clean expectations, rather than deriving them from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases This case owns the actual ObjectSimple producer connection and all its spoilers. Plugin-free report/graph units own adversarial callback reports and graph boundaries; disabled generated validatePrune factory families contribute no execution here.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers this matching exported composite and executes its native-transformed callback. It remains a native boundary case while the helper's portable clean semantics also execute in test-utils test:unit.
 * @evidence contracts/e2e.md#necessary-boundary The real transformer must replace the public call with an ObjectSimple validation pruner and deliver usable mutation/success/error reports. Authored callback units cannot verify that assembly connection.
 * @evidence contracts/e2e.md#shared-execution All clean/spoiled inputs reuse the single suite worker and native artifact shared by generated families and composites. Generation finishes before that worker loads its project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper generates each input independently and retains only local reports/path arrays. The runner owns and closes the composite worker; the test starts no separate process or cache lifetime.
 * @evidence contracts/e2e.md#preserved-coverage The same native call, fixture, spoilers and invalid-report/path assertions remain. Shared report and graph units additionally detect malformed statuses, foreign data and destructive/no-op pruning without a native host.
 */
export const test_plain_validatePrune_ObjectSimple = (): void =>
  _test_plain_validatePrune("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.plain.validatePrune<ObjectSimple>(input),
  );
