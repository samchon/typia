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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 12 assertions (keys; questions prototype; a.b; a → b; space; quote). The case documents its purpose as: Verifies typia.llm.evaluation question keys are unique and prototype-safe.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Keys are readable property paths in typia's accessor notation, so a property named `a.b` must not collide with the nested path `a` → `b`, names with spaces or quotes must stay distinct, and a `__proto__` property must become an own key of the question map and of the converted value instead of rewriting either object's prototype. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (keys; questions prototype; a.b; a → b; space; quote) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_key_encoding is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
