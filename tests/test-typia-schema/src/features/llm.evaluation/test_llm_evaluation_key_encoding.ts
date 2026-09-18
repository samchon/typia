import { TestValidator } from "@nestia/e2e";
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
 * 2. Generate the question keys and round-trip answers through validate.
 * 3. Assert the exact keys, the converted value, and untouched prototypes.
 */
export const test_llm_evaluation_key_encoding = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  TestValidator.equals("keys", Object.keys(evaluation.questions), [
    '["a.b"]',
    "a.b",
    '["with space"]',
    '["say \\"hi\\""]',
    '["__proto__"]',
    "__proto_holder.inner",
    'set["late delivery"]',
  ]);
  TestValidator.equals(
    "questions prototype",
    Object.getPrototypeOf(evaluation.questions),
    Object.prototype,
  );

  const answers: Record<string, unknown> = {};
  for (const [index, key] of Object.keys(evaluation.questions).entries())
    answers[key] = { type: "boolean", probability: index % 2 === 0 ? 1 : 0 };
  const result = evaluation.validate(answers);
  if (result.success === false) throw new Error("unexpected failure");

  const data: IDecision = result.data;
  TestValidator.equals("a.b", data["a.b"], true);
  TestValidator.equals("a → b", data.a.b, false);
  TestValidator.equals("space", data["with space"], true);
  TestValidator.equals("quote", data['say "hi"'], false);
  TestValidator.equals(
    "__proto__ own",
    Object.prototype.hasOwnProperty.call(data, "__proto__"),
    true,
  );
  TestValidator.equals(
    "__proto__ value",
    Object.getOwnPropertyDescriptor(data, "__proto__")?.value,
    true,
  );
  TestValidator.equals(
    "data prototype",
    Object.getPrototypeOf(data),
    Object.prototype,
  );
  TestValidator.equals(
    "nested under __proto__",
    data.__proto_holder.inner,
    false,
  );
  TestValidator.equals("set", data.set, ["late delivery"]);
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
