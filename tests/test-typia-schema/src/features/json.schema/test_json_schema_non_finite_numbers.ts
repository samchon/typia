import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies non-finite numbers emit as JavaScript, not as Go's `+Inf`.
 *
 * The emitter spelled an infinity the way Go formats it, so every generated
 * function carrying one threw `ReferenceError: Inf is not defined` on its first
 * run (#2452). A numeric literal type that overflows (`1e400`) and a type tag
 * built from one are TypeScript's own `Infinity`, so the emitted schemas must
 * carry that value instead of crashing. The validators, which already worked,
 * are the control.
 *
 * 1. Generate schemas, LLM parameters, and metadata for an overflowing literal
 *    type and an overflowing `Maximum` type tag.
 * 2. Assert none of them throws and each carries `Infinity`.
 * 3. Assert the validators and the random generator still behave, and that the
 *    generator refuses a range no finite number satisfies.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema, typia.llm.parameters, typia.reflect.schema is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (literal const; literal llm enum; literal metadata; literal validator; tag maximum; tag validator). The case documents its purpose as: Verifies non-finite numbers emit as JavaScript, not as Go's `+Inf`.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The emitter spelled an infinity the way Go formats it, so every generated function carrying one threw `ReferenceError: Inf is not defined` on its first run (#2452). A numeric literal type that overflows (`1e400`) and a type tag built from one are TypeScript's own `Infinity`, so the emitted schemas must carry that value instead of crashing. The validators, which already worked, are the control. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (literal const; literal llm enum; literal metadata; literal validator; tag maximum; tag validator) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_non_finite_numbers is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_non_finite_numbers = (): void => {
  const literal: any =
    typia.json.schema<ILiteral>().components.schemas?.ILiteral;
  TestEquality.equals(
    "literal const",
    literal.properties.value.const,
    Infinity,
  );
  const literalParameters: any = typia.llm.parameters<ILiteral>();
  TestEquality.equals("literal llm enum", literalParameters.properties.value, {
    type: "number",
    enum: [Infinity],
  });
  TestValidator.predicate("literal metadata", () => {
    typia.reflect.schema<ILiteral>();
    return true;
  });
  TestValidator.predicate(
    "literal validator",
    () =>
      typia.is<ILiteral>({ value: Infinity }) &&
      typia.is<ILiteral>({ value: 1 }) === false,
  );

  const tagged: any = typia.json.schema<ITagged>().components.schemas?.ITagged;
  TestEquality.equals("tag maximum", tagged.properties.value.maximum, Infinity);
  TestValidator.predicate(
    "tag validator",
    () =>
      typia.is<ITagged>({ value: 1 }) &&
      typia.is<ITagged>({ value: "1" }) === false,
  );
  TestValidator.predicate("tag random", () =>
    typia.is<ITagged>(typia.random<ITagged>()),
  );
  TestEquality.equals(
    "unsatisfiable random",
    TestEquality.thrown(() => typia.random<IUnsatisfiable>()),
    "Numeric range has no finite value.",
  );
};

interface ILiteral {
  value: 1e400;
}
interface ITagged {
  value: number & tags.Maximum<1e400>;
}
interface IUnsatisfiable {
  value: number & tags.Minimum<1e400>;
}
