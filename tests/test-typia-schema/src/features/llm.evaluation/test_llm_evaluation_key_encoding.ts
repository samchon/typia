import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation question keys are unique and prototype-safe.
 *
 * Keys are readable property paths in typia's accessor notation, so a property
 * named `a.b` must not collide with the nested path `a` → `b`, names with
 * spaces or quotes must stay distinct, and a `__proto__` property must become
 * an own key of the question map and of the converted value instead of
 * rewriting either object's prototype.
 *
 * 1. Declare colliding-looking, quoted, spaced, and `__proto__` properties.
 * 2. Generate the question keys and decode the answer map.
 * 3. Assert the exact keys, the converted value, and untouched prototypes.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated question map has the exact distinct dotted, nested, spaced, quoted, __proto__ and set-member keys, and decode builds the corresponding own fields without changing prototypes.
 * @evidence contracts/testing.md#independent-expectations Accessor notation literals and JavaScript own-property/prototype semantics independently determine the expected keys, alternating booleans and ownership. Answer keys are enumerated from output only after the complete key list has been pinned literally.
 * @evidence contracts/testing.md#distinguishing-cases Dotted property versus nested path, escaped quote/space, own __proto__ descriptor, ordinary object prototypes and set path all remain observable; a key collision cannot pass the exact list assertion.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_key_encoding is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Dotted property versus nested path, escaped quote/space, own __proto__ descriptor, ordinary object prototypes and set path all remain observable; a key collision cannot pass the exact list assertion. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_key_encoding = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  TestEquality.equals("keys", Object.keys(evaluation.questions), [
    '["a.b"]',
    "a.b",
    '["with space"]',
    '["say \\"hi\\""]',
    '["__proto__"]',
    "__proto_holder.inner",
    'set["late delivery"]',
  ]);
  TestEquality.equals(
    "questions prototype",
    Object.getPrototypeOf(evaluation.questions) === Object.prototype,
    true,
  );

  const answers: Record<string, unknown> = {};
  for (const [index, key] of Object.keys(evaluation.questions).entries())
    answers[key] = { type: "boolean", probability: index % 2 === 0 ? 1 : 0 };
  const result = evaluation.decode(answers);
  if (result.success === false) throw new Error("unexpected failure");

  const data: IDecision = result.data;
  TestEquality.equals("a.b", data["a.b"], true);
  TestEquality.equals("a → b", data.a.b, false);
  TestEquality.equals("space", data["with space"], true);
  TestEquality.equals("quote", data['say "hi"'], false);
  TestEquality.equals(
    "__proto__ own",
    Object.prototype.hasOwnProperty.call(data, "__proto__"),
    true,
  );
  TestEquality.equals(
    "__proto__ value",
    Object.getOwnPropertyDescriptor(data, "__proto__")?.value,
    true,
  );
  TestEquality.equals(
    "data prototype",
    Object.getPrototypeOf(data) === Object.prototype,
    true,
  );
  TestEquality.equals(
    "nested under __proto__",
    data.__proto_holder.inner,
    false,
  );
  TestEquality.equals("set", data.set, ["late delivery"]);
};

interface IDecision {
  /** Dotted name? */
  "a.b": boolean;
  a: {
    /** Nested b? */
    b: boolean;
  };
  /** Spaced name? */
  "with space": boolean;
  /** Quoted name? */
  'say "hi"': boolean;
  /** Prototype name? */
  ["__proto__"]: boolean;
  __proto_holder: {
    /** Inner? */
    inner: boolean;
  };
  /** Which delay? */
  set: Array<"late delivery">;
}
