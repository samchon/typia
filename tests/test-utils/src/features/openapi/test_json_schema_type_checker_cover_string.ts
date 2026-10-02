import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies string format coverage for every native typia format pair.
 *
 * Native literal reflection supplies the declared format population. Authored
 * containment relations must hold across every ordered pair of that
 * population.
 *
 * 1. Enumerate every tags.Format value natively.
 * 2. Compare every ordered pair against authored containment relations.
 *
 * @evidence contracts/testing.md#behavioral-verification covers is called on every ordered pair of formats enumerated by typia.reflect.literals and each boolean is compared against the authored relation.
 * @evidence contracts/testing.md#independent-expectations Authored equality and declared format-superset relations decide verdicts; the population is enumerated natively instead of copied from a hand-maintained list. Native population completeness itself is not independently certified here.
 * @evidence contracts/testing.md#distinguishing-cases The sweep retains every ordered pair, including identical formats, declared strict supersets and unrelated formats. Original ten authored enum/length/pattern rows are registered in test_json_schema_type_checker_cover_string_portable.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.reflect.literals is evaluated by the native transform; covers runs in process.
 * @evidence contracts/e2e.md#necessary-boundary Native reflect.literals supplies the actual Format.Value population to the ordered-pair containment sweep. Authored relations establish verdicts for this emitted declaration-population boundary.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage Every original reflect.literals producer call and ordered-pair assertion remains here. The ten original authored enum/length/pattern inputs and booleans moved unchanged to the registered plugin-free unit peer. The native population supplies inputs, while the authored relations decide coverage verdicts.
 */
export const test_json_schema_type_checker_cover_string = (): void => {
  // CHECK FORMAT CASE
  for (const x of typia.reflect.literals<tags.Format.Value>())
    for (const y of typia.reflect.literals<tags.Format.Value>())
      TestEquality.equals(
        `format ${x} covers ${y}`,
        x === y ||
          (x === "idn-email" && y === "email") ||
          (x === "idn-hostname" && y === "hostname") ||
          (["uri", "iri"].includes(x) && y === "url") ||
          (x === "iri" && y === "uri") ||
          (x === "iri-reference" && y === "uri-reference"),
        OpenApiTypeChecker.covers({
          components: {},
          x: { type: "string", format: x },
          y: { type: "string", format: y },
        }),
      );
};
