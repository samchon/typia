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
  TestValidator.error("unsatisfiable random", () =>
    typia.random<IUnsatisfiable>(),
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
