import { _test_plain_validatePrune_success } from "@typia/oracle/prune";
import { TestStructure } from "@typia/template";
import { IValidation, assertEquals } from "typia";

/**
 * Checks native validation pruning on clean and independently spoiled fixtures.
 *
 * Portable clean mutation/report checks are shared with plugin-free units.
 * Invalid reports retain the existing native shape assertion and complete
 * expected-path comparison; that native oracle dependency remains explicit.
 *
 * @evidence contracts/common.md#principled-implementation The shared clean operation verifies deletion-only mutation and true/original-data reporting. Each authored spoiler supplies independent expected paths; the existing invalid-report shape assertion and sorted path multiplicity check remain unchanged.
 * @evidence contracts/common.md#clear-and-simple-design Existing name/fixture/callback currying remains intact. Clean semantics have one portable owner; this wrapper owns spoiler iteration, native report-shape checking and aggregated path failures.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Supplied native callbacks execute directly, without source-marker bypasses or replaced methods. The invalid-report shape assertion still uses native assertEquals; its independence is not proved by the clean-report unit and remains a broader oracle-review surface.
 * @evidence contracts/common.md#meaningful-documentation Native prose states the clean versus invalid ownership and retained native assertion dependency. Spoiled path records document independently authored and returned paths separately.
 * @evidence contracts/testing.md#behavioral-verification Clean execution requires correct mutation, literal true and original report data. Invalid execution must reject, pass the existing report-shape check and return every authored error path with matching multiplicity; mismatches aggregate before failure.
 * @evidence contracts/testing.md#independent-expectations The fixture and spoilers establish clean/invalid inputs and expected paths before product execution. The successful report contract is independently checked by the shared operation; invalid shape checking remains the existing native validator dependency.
 * @evidence contracts/testing.md#distinguishing-cases The actual ObjectSimple composite supplies one otherwise-valid surplus-mutated input and all its authored spoilers. Malformed successful reports and mutation boundaries are separately distinguished by the shared plugin-free report and graph units.
 * @evidence contracts/testing.md#execution-ownership The authored native composite passes its actual generated validatePrune callback here. The shared clean operation also runs in units; native assertEquals and the producer connection keep this wrapper in the E2E population.
 * @evidence contracts/e2e.md#necessary-boundary This wrapper consumes the real native-generated validatePrune callback and invalid-report shape assertion. The composite detects producer assembly/report/path defects that direct portable callback units cannot establish.
 * @evidence contracts/e2e.md#shared-execution Its clean and spoiler cases reuse one composite worker and native artifact. Cross-family automated execution still starts a worker per visited family and repeats project loads; minimum shared host preparation is unresolved campaign work, not certified here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each spoiler receives a newly generated fixture and report; expected and actual path arrays are local to that scenario. TestServant reports the case and the runner closes its composite worker in finally; no process is acquired by this helper.
 * @evidence contracts/e2e.md#preserved-coverage The invalid-report assertion, all spoilers, sorting/multiplicity comparison and failure identity are retained. The complete clean scenario now executes in both the native connection and the shared portable unit owner; disabled generated factory families are not credited.
 */
export const _test_plain_validatePrune =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (prune: (input: T) => IValidation<T>): void => {
    _test_plain_validatePrune_success(name)(factory)(prune);

    // SPOIL
    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: IValidation<T> = prune(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.plain.validatePrune(): failed to detect error on the ${name} type.`,
        );

      assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.plain.validatePrune(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  /** Independently authored diagnostic paths from the fixture spoiler. */
  expected: string[];

  /** Diagnostic paths returned by the native validation report. */
  actual: string[];
}
