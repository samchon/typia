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
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that overflowing literal/tag schemas emit usable Infinity and runtime validators/random retain their stated behavior.
 * @evidence contracts/testing.md#independent-expectations TypeScript 1e400 is Infinity; handwritten schema values and explicit true/false verdicts distinguish invalid Go +Inf output, and an impossible finite random range must throw.
 * @evidence contracts/testing.md#distinguishing-cases Literal versus Maximum versus Minimum overflow, positive/negative validators, metadata nonthrowing, random acceptance and impossible-range error remain; random-versus-is has a shared-producer limitation.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_non_finite_numbers through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Actual emitted JavaScript must execute without an Inf identifier ReferenceError. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Literal versus Maximum versus Minimum overflow, positive/negative validators, metadata nonthrowing, random acceptance and impossible-range error remain; random-versus-is has a shared-producer limitation. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
