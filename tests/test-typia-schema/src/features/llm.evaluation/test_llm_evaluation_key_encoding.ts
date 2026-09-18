import typia from "typia";

import { _equalsExactly } from "../../internal/_equalsExactly";

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
  _equalsExactly("keys", Object.keys(evaluation.questions), [
    '["a.b"]',
    "a.b",
    '["with space"]',
    '["say \\"hi\\""]',
    '["__proto__"]',
    "__proto_holder.inner",
    'set["late delivery"]',
  ]);
  _equalsExactly(
    "questions prototype",
    Object.getPrototypeOf(evaluation.questions) === Object.prototype,
    true,
  );

  const answers: Record<string, unknown> = {};
  for (const [index, key] of Object.keys(evaluation.questions).entries())
    answers[key] = { type: "boolean", probability: index % 2 === 0 ? 1 : 0 };
  const result = evaluation.validate(answers);
  if (result.success === false) throw new Error("unexpected failure");

  const data: IDecision = result.data;
  _equalsExactly("a.b", data["a.b"], true);
  _equalsExactly("a → b", data.a.b, false);
  _equalsExactly("space", data["with space"], true);
  _equalsExactly("quote", data['say "hi"'], false);
  _equalsExactly(
    "__proto__ own",
    Object.prototype.hasOwnProperty.call(data, "__proto__"),
    true,
  );
  _equalsExactly(
    "__proto__ value",
    Object.getOwnPropertyDescriptor(data, "__proto__")?.value,
    true,
  );
  _equalsExactly(
    "data prototype",
    Object.getPrototypeOf(data) === Object.prototype,
    true,
  );
  _equalsExactly("nested under __proto__", data.__proto_holder.inner, false);
  _equalsExactly("set", data.set, ["late delivery"]);
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
