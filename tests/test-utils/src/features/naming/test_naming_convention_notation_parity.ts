import { TestEquality } from "@typia/template/equality";
import { NamingConvention } from "@typia/utils";
import typia from "typia";

/**
 * Verifies NamingConvention's converters equal `typia.notations.*` per key.
 *
 * `NamingConvention.{snake,kebab,camel,pascal}` is a third, independent copy of
 * the case-conversion contract owned by `typia.notations.*` and the `*Case<T>`
 * types. It drifted: on a key mixing an underscore with an internal case
 * boundary the snake/kebab copy lowercased each underscore-delimited segment
 * atomically (`fooBar_baz` -> `foobar_baz`) and the pascal copy dropped the
 * inner-character lowercasing of an all-caps run (`MAX_COUNT` -> `MAXCOUNT`),
 * both diverging from the notation contract (#2186, #2190). This asserts the
 * two producers agree over the exact #2190 witness matrix by comparing each
 * `NamingConvention` output to the live `typia.notations.*` conversion of the
 * same key, so the copy can never silently diverge from the contract again.
 *
 * 1. Convert a witness object of underscore-boundary, all-caps, and plain keys
 *    through each `typia.notations.*` transform and read the produced key
 *    list.
 * 2. Convert every source key through the matching `NamingConvention` helper.
 * 3. Require each helper output to equal the notation-produced key.
 *
 * @evidence contracts/testing.md#behavioral-verification NamingConvention snake, kebab, camel and pascal are compared per key with the keys the native typia.notations transform produces over the witness matrix.
 * @evidence contracts/testing.md#independent-expectations typia.notations is an independent native implementation of the case-conversion contract, so each key is judged against it and not against a literal copy of the utility.
 * @evidence contracts/testing.md#distinguishing-cases The witness keys mix underscores with internal case boundaries and all-caps runs, where the copies diverged; keys outside the matrix are not compared.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.notations is transformed by the native host, which is the producer this parity needs.
 * @evidence contracts/e2e.md#necessary-boundary Native typia.notations outputs reach comparison with portable naming functions for nine authored keys and four modes. This detects emitted/runtime divergence; both sides may share a naming defect.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_naming_convention_notation_parity = (): void => {
  // The #2190 witness matrix: keys mixing an underscore with a case boundary,
  // trailing and leading underscores, an acronym run, and a plain camelCase key.
  const witness = {
    fooBar_baz: 0,
    openAI_key: 0,
    HTTP_fooBar: 0,
    fooBar: 0,
    fooBar_: 0,
    _fooBar: 0,
    userID: 0,
    a_b_c: 0,
    MAX_COUNT: 0,
  };
  const inputs: string[] = Object.keys(witness);

  // `typia.notations.*` builds the destination object by walking the source
  // keys in declaration order, so its produced key list aligns index-by-index
  // with `Object.keys(witness)`. That makes the notation output the oracle each
  // `NamingConvention` helper must reproduce for the same key.
  const check = (
    label: string,
    convention: (str: string) => string,
    produced: string[],
  ): void => {
    TestEquality.equals(`${label} key count`, produced.length, inputs.length);
    inputs.forEach((key, i) =>
      TestEquality.equals(
        `${label}(${JSON.stringify(key)})`,
        convention(key),
        produced[i]!,
      ),
    );
  };

  check(
    "snake",
    NamingConvention.snake,
    Object.keys(typia.notations.snake(witness)),
  );
  check(
    "kebab",
    NamingConvention.kebab,
    Object.keys(typia.notations.kebab(witness)),
  );
  check(
    "camel",
    NamingConvention.camel,
    Object.keys(typia.notations.camel(witness)),
  );
  check(
    "pascal",
    NamingConvention.pascal,
    Object.keys(typia.notations.pascal(witness)),
  );
};
