import { TestValidator } from "@nestia/e2e";
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
 * both diverging from the notation contract (#2186, #2190). This asserts the two
 * producers agree over the exact #2190 witness matrix by comparing each
 * `NamingConvention` output to the live `typia.notations.*` conversion of the
 * same key, so the copy can never silently diverge from the contract again.
 *
 * 1. Convert a witness object of underscore-boundary, all-caps, and plain keys
 *    through each `typia.notations.*` transform and read the produced key list.
 * 2. Convert every source key through the matching `NamingConvention` helper.
 * 3. Require each helper output to equal the notation-produced key.
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
    TestValidator.equals(`${label} key count`, produced.length, inputs.length);
    inputs.forEach((key, i) =>
      TestValidator.equals(
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
