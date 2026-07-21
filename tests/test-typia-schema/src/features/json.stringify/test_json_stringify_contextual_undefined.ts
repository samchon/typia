import { TestValidator } from "@nestia/e2e";
import typia, { IValidation } from "typia";

interface IAnyProperty {
  keep: number;
  value: any;
}
interface IUnknownProperty {
  keep: number;
  value: unknown;
}
interface IUndefinedProperty {
  keep: number;
  value: undefined;
}
interface IMaybeJsonable {
  toJSON(): string | undefined;
}
interface IMaybeJsonableProperty {
  keep: number;
  value: IMaybeJsonable;
}
interface INested {
  outer: { inner: any }[];
}

/**
 * Verifies typia.json stringify output stays JSON wherever a child serializes
 * to undefined.
 *
 * `any` and `unknown` delegate to JSON.stringify, which answers JavaScript
 * `undefined` for a function, a symbol, and a toJSON that returns nothing; a
 * property typed `undefined` has nothing to serialize; and an array hole reads
 * as undefined at every element type. Those children used to be concatenated
 * verbatim, so the emitted text carried the token `undefined` or an empty array
 * slot and failed JSON.parse, while isStringify / assertStringify /
 * validateStringify reported that text as success.
 *
 * 1. Serialize each contextual value with the raw, is, assert, and validate
 *    families.
 * 2. Take the expected document from native `JSON.stringify` of the same input,
 *    never from typia's own emit.
 * 3. Assert every success payload parses and equals the oracle document.
 */
export const test_json_stringify_contextual_undefined = (): void => {
  // Compare a typia payload with what ECMAScript JSON.stringify writes for the
  // same input. Both sides are parsed, because typia may order the properties
  // it emits differently while still producing an equivalent document.
  const oracle = (label: string, actual: string, input: unknown): void => {
    const expected: string = JSON.stringify(input) as string;
    TestValidator.equals(label, JSON.parse(actual), JSON.parse(expected));
  };

  // Every family must agree with the oracle on one input.
  const families = <T>(
    label: string,
    input: T,
    raw: (input: T) => string,
    guarded: (input: T) => string | null,
    asserted: (input: T) => string,
    validated: (input: T) => IValidation<string>,
  ): void => {
    oracle(`${label} / stringify`, raw(input), input);

    const isText: string | null = guarded(input);
    TestValidator.equals(
      `${label} / isStringify accepts`,
      isText !== null,
      true,
    );
    if (isText !== null) oracle(`${label} / isStringify`, isText, input);

    oracle(`${label} / assertStringify`, asserted(input), input);

    const result: IValidation<string> = validated(input);
    TestValidator.equals(
      `${label} / validateStringify accepts`,
      result.success,
      true,
    );
    if (result.success === true)
      oracle(`${label} / validateStringify`, result.data, input);
  };

  const anyProperty = (label: string, value: any): void =>
    families<IAnyProperty>(
      `any property ${label}`,
      { keep: 1, value },
      (input) => typia.json.stringify<IAnyProperty>(input),
      (input) => typia.json.isStringify<IAnyProperty>(input),
      (input) => typia.json.assertStringify<IAnyProperty>(input),
      (input) => typia.json.validateStringify<IAnyProperty>(input),
    );

  // Static `any` property: a function, a symbol, and a toJSON that returns
  // nothing all serialize to undefined and must vanish with their comma.
  anyProperty("function", () => 0);
  anyProperty("symbol", Symbol("s"));
  anyProperty("undefined", undefined);
  anyProperty("toJSON returning undefined", { toJSON: () => undefined });
  anyProperty("null", null);
  anyProperty("number", 2);
  anyProperty("nested members", { a: 1, b: () => 0, c: Symbol("x") });

  // `unknown` must behave exactly like `any`.
  families<IUnknownProperty>(
    "unknown property function",
    { keep: 1, value: () => 0 },
    (input) => typia.json.stringify<IUnknownProperty>(input),
    (input) => typia.json.isStringify<IUnknownProperty>(input),
    (input) => typia.json.assertStringify<IUnknownProperty>(input),
    (input) => typia.json.validateStringify<IUnknownProperty>(input),
  );

  // A required property typed `undefined` has nothing to serialize.
  families<IUndefinedProperty>(
    "undefined property",
    { keep: 1, value: undefined },
    (input) => typia.json.stringify<IUndefinedProperty>(input),
    (input) => typia.json.isStringify<IUndefinedProperty>(input),
    (input) => typia.json.assertStringify<IUndefinedProperty>(input),
    (input) => typia.json.validateStringify<IUndefinedProperty>(input),
  );

  // A toJSON whose declared return admits undefined resolves to nothing.
  families<IMaybeJsonableProperty>(
    "maybe jsonable property",
    { keep: 1, value: { toJSON: () => undefined } },
    (input) => typia.json.stringify<IMaybeJsonableProperty>(input),
    (input) => typia.json.isStringify<IMaybeJsonableProperty>(input),
    (input) => typia.json.assertStringify<IMaybeJsonableProperty>(input),
    (input) => typia.json.validateStringify<IMaybeJsonableProperty>(input),
  );

  // Dynamic (index signature) properties take the same contextual decision.
  families<Record<string, any>>(
    "record any",
    { keep: 1, omit: () => 0, sym: Symbol("s"), nil: null, undef: undefined },
    (input) => typia.json.stringify<Record<string, any>>(input),
    (input) => typia.json.isStringify<Record<string, any>>(input),
    (input) => typia.json.assertStringify<Record<string, any>>(input),
    (input) => typia.json.validateStringify<Record<string, any>>(input),
  );

  // Array slots become `null`, never an empty slot.
  families<any[]>(
    "any array",
    [() => 0, 1, Symbol("s"), undefined, null],
    (input) => typia.json.stringify<any[]>(input),
    (input) => typia.json.isStringify<any[]>(input),
    (input) => typia.json.assertStringify<any[]>(input),
    (input) => typia.json.validateStringify<any[]>(input),
  );

  // A hole reads as undefined whatever the element type declares, so a sparse
  // typed array is the same contextual case as a function in an `any` slot.
  const sparse: number[] = [];
  sparse[2] = 3;
  families<number[]>(
    "sparse number array",
    sparse,
    (input) => typia.json.stringify<number[]>(input),
    (input) => typia.json.isStringify<number[]>(input),
    (input) => typia.json.assertStringify<number[]>(input),
    (input) => typia.json.validateStringify<number[]>(input),
  );

  // Tuple and rest positions are array context too.
  families<[any, unknown, number]>(
    "tuple",
    [() => 0, Symbol("s"), 1],
    (input) => typia.json.stringify<[any, unknown, number]>(input),
    (input) => typia.json.isStringify<[any, unknown, number]>(input),
    (input) => typia.json.assertStringify<[any, unknown, number]>(input),
    (input) => typia.json.validateStringify<[any, unknown, number]>(input),
  );
  families<[number, ...any[]]>(
    "rest tuple",
    [1, () => 0, 2],
    (input) => typia.json.stringify<[number, ...any[]]>(input),
    (input) => typia.json.isStringify<[number, ...any[]]>(input),
    (input) => typia.json.assertStringify<[number, ...any[]]>(input),
    (input) => typia.json.validateStringify<[number, ...any[]]>(input),
  );

  // Nested containers inherit the same decision at every depth.
  families<INested>(
    "nested",
    { outer: [{ inner: () => 0 }, { inner: 1 }] },
    (input) => typia.json.stringify<INested>(input),
    (input) => typia.json.isStringify<INested>(input),
    (input) => typia.json.assertStringify<INested>(input),
    (input) => typia.json.validateStringify<INested>(input),
  );

  // Negative twin: a value the checkers must still reject, so the contextual
  // relaxation above cannot be mistaken for "accept everything".
  TestValidator.equals(
    "invalid neighbor rejected",
    typia.json.isStringify<IAnyProperty>({ keep: "x", value: 1 } as never),
    null,
  );
};
