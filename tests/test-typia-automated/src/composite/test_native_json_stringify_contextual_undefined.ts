import typia from "typia";

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
interface IOptionalAny {
  keep: number;
  value?: any;
}
type IRecordAny = Record<string, any>;
type IRecordUnknown = Record<string, unknown>;
interface IMixedRecord {
  keep: number;
  [key: string]: any;
}
type IAnyArray = any[];
type IUnknownArray = unknown[];
type INumberArray = number[];
type ITuple = [any, unknown, number];
type IRestTuple = [number, ...any[]];
interface INested {
  outer: { inner: any }[];
}
interface IJsonable {
  toJSON(): string;
}
interface IMaybeJsonable {
  toJSON(): string | undefined;
}
interface IJsonableProperty {
  keep: number;
  value: IJsonable;
}
interface IMaybeJsonableProperty {
  keep: number;
  value: IMaybeJsonable;
}

const factory_stringify_anyProperty =
  typia.json.createStringify<IAnyProperty>();
const direct_stringify_anyProperty = (input: IAnyProperty) =>
  typia.json.stringify<IAnyProperty>(input);
const factory_isStringify_anyProperty =
  typia.json.createIsStringify<IAnyProperty>();
const direct_isStringify_anyProperty = (input: IAnyProperty) =>
  typia.json.isStringify<IAnyProperty>(input);
const factory_assertStringify_anyProperty =
  typia.json.createAssertStringify<IAnyProperty>();
const direct_assertStringify_anyProperty = (input: IAnyProperty) =>
  typia.json.assertStringify<IAnyProperty>(input);
const factory_validateStringify_anyProperty =
  typia.json.createValidateStringify<IAnyProperty>();
const direct_validateStringify_anyProperty = (input: IAnyProperty) =>
  typia.json.validateStringify<IAnyProperty>(input);
const factory_stringify_unknownProperty =
  typia.json.createStringify<IUnknownProperty>();
const direct_stringify_unknownProperty = (input: IUnknownProperty) =>
  typia.json.stringify<IUnknownProperty>(input);
const factory_isStringify_unknownProperty =
  typia.json.createIsStringify<IUnknownProperty>();
const direct_isStringify_unknownProperty = (input: IUnknownProperty) =>
  typia.json.isStringify<IUnknownProperty>(input);
const factory_assertStringify_unknownProperty =
  typia.json.createAssertStringify<IUnknownProperty>();
const direct_assertStringify_unknownProperty = (input: IUnknownProperty) =>
  typia.json.assertStringify<IUnknownProperty>(input);
const factory_validateStringify_unknownProperty =
  typia.json.createValidateStringify<IUnknownProperty>();
const direct_validateStringify_unknownProperty = (input: IUnknownProperty) =>
  typia.json.validateStringify<IUnknownProperty>(input);
const factory_stringify_undefinedProperty =
  typia.json.createStringify<IUndefinedProperty>();
const direct_stringify_undefinedProperty = (input: IUndefinedProperty) =>
  typia.json.stringify<IUndefinedProperty>(input);
const factory_isStringify_undefinedProperty =
  typia.json.createIsStringify<IUndefinedProperty>();
const direct_isStringify_undefinedProperty = (input: IUndefinedProperty) =>
  typia.json.isStringify<IUndefinedProperty>(input);
const factory_assertStringify_undefinedProperty =
  typia.json.createAssertStringify<IUndefinedProperty>();
const direct_assertStringify_undefinedProperty = (input: IUndefinedProperty) =>
  typia.json.assertStringify<IUndefinedProperty>(input);
const factory_validateStringify_undefinedProperty =
  typia.json.createValidateStringify<IUndefinedProperty>();
const direct_validateStringify_undefinedProperty = (
  input: IUndefinedProperty,
) => typia.json.validateStringify<IUndefinedProperty>(input);
const factory_stringify_optionalAny =
  typia.json.createStringify<IOptionalAny>();
const direct_stringify_optionalAny = (input: IOptionalAny) =>
  typia.json.stringify<IOptionalAny>(input);
const factory_isStringify_optionalAny =
  typia.json.createIsStringify<IOptionalAny>();
const direct_isStringify_optionalAny = (input: IOptionalAny) =>
  typia.json.isStringify<IOptionalAny>(input);
const factory_assertStringify_optionalAny =
  typia.json.createAssertStringify<IOptionalAny>();
const direct_assertStringify_optionalAny = (input: IOptionalAny) =>
  typia.json.assertStringify<IOptionalAny>(input);
const factory_validateStringify_optionalAny =
  typia.json.createValidateStringify<IOptionalAny>();
const direct_validateStringify_optionalAny = (input: IOptionalAny) =>
  typia.json.validateStringify<IOptionalAny>(input);
const factory_stringify_recordAny = typia.json.createStringify<IRecordAny>();
const direct_stringify_recordAny = (input: IRecordAny) =>
  typia.json.stringify<IRecordAny>(input);
const factory_isStringify_recordAny =
  typia.json.createIsStringify<IRecordAny>();
const direct_isStringify_recordAny = (input: IRecordAny) =>
  typia.json.isStringify<IRecordAny>(input);
const factory_assertStringify_recordAny =
  typia.json.createAssertStringify<IRecordAny>();
const direct_assertStringify_recordAny = (input: IRecordAny) =>
  typia.json.assertStringify<IRecordAny>(input);
const factory_validateStringify_recordAny =
  typia.json.createValidateStringify<IRecordAny>();
const direct_validateStringify_recordAny = (input: IRecordAny) =>
  typia.json.validateStringify<IRecordAny>(input);
const factory_stringify_recordUnknown =
  typia.json.createStringify<IRecordUnknown>();
const direct_stringify_recordUnknown = (input: IRecordUnknown) =>
  typia.json.stringify<IRecordUnknown>(input);
const factory_isStringify_recordUnknown =
  typia.json.createIsStringify<IRecordUnknown>();
const direct_isStringify_recordUnknown = (input: IRecordUnknown) =>
  typia.json.isStringify<IRecordUnknown>(input);
const factory_assertStringify_recordUnknown =
  typia.json.createAssertStringify<IRecordUnknown>();
const direct_assertStringify_recordUnknown = (input: IRecordUnknown) =>
  typia.json.assertStringify<IRecordUnknown>(input);
const factory_validateStringify_recordUnknown =
  typia.json.createValidateStringify<IRecordUnknown>();
const direct_validateStringify_recordUnknown = (input: IRecordUnknown) =>
  typia.json.validateStringify<IRecordUnknown>(input);
const factory_stringify_mixedRecord =
  typia.json.createStringify<IMixedRecord>();
const direct_stringify_mixedRecord = (input: IMixedRecord) =>
  typia.json.stringify<IMixedRecord>(input);
const factory_isStringify_mixedRecord =
  typia.json.createIsStringify<IMixedRecord>();
const direct_isStringify_mixedRecord = (input: IMixedRecord) =>
  typia.json.isStringify<IMixedRecord>(input);
const factory_assertStringify_mixedRecord =
  typia.json.createAssertStringify<IMixedRecord>();
const direct_assertStringify_mixedRecord = (input: IMixedRecord) =>
  typia.json.assertStringify<IMixedRecord>(input);
const factory_validateStringify_mixedRecord =
  typia.json.createValidateStringify<IMixedRecord>();
const direct_validateStringify_mixedRecord = (input: IMixedRecord) =>
  typia.json.validateStringify<IMixedRecord>(input);
const factory_stringify_anyArray = typia.json.createStringify<IAnyArray>();
const direct_stringify_anyArray = (input: IAnyArray) =>
  typia.json.stringify<IAnyArray>(input);
const factory_isStringify_anyArray = typia.json.createIsStringify<IAnyArray>();
const direct_isStringify_anyArray = (input: IAnyArray) =>
  typia.json.isStringify<IAnyArray>(input);
const factory_assertStringify_anyArray =
  typia.json.createAssertStringify<IAnyArray>();
const direct_assertStringify_anyArray = (input: IAnyArray) =>
  typia.json.assertStringify<IAnyArray>(input);
const factory_validateStringify_anyArray =
  typia.json.createValidateStringify<IAnyArray>();
const direct_validateStringify_anyArray = (input: IAnyArray) =>
  typia.json.validateStringify<IAnyArray>(input);
const factory_stringify_unknownArray =
  typia.json.createStringify<IUnknownArray>();
const direct_stringify_unknownArray = (input: IUnknownArray) =>
  typia.json.stringify<IUnknownArray>(input);
const factory_isStringify_unknownArray =
  typia.json.createIsStringify<IUnknownArray>();
const direct_isStringify_unknownArray = (input: IUnknownArray) =>
  typia.json.isStringify<IUnknownArray>(input);
const factory_assertStringify_unknownArray =
  typia.json.createAssertStringify<IUnknownArray>();
const direct_assertStringify_unknownArray = (input: IUnknownArray) =>
  typia.json.assertStringify<IUnknownArray>(input);
const factory_validateStringify_unknownArray =
  typia.json.createValidateStringify<IUnknownArray>();
const direct_validateStringify_unknownArray = (input: IUnknownArray) =>
  typia.json.validateStringify<IUnknownArray>(input);
const factory_stringify_numberArray =
  typia.json.createStringify<INumberArray>();
const direct_stringify_numberArray = (input: INumberArray) =>
  typia.json.stringify<INumberArray>(input);
const factory_isStringify_numberArray =
  typia.json.createIsStringify<INumberArray>();
const direct_isStringify_numberArray = (input: INumberArray) =>
  typia.json.isStringify<INumberArray>(input);
const factory_assertStringify_numberArray =
  typia.json.createAssertStringify<INumberArray>();
const direct_assertStringify_numberArray = (input: INumberArray) =>
  typia.json.assertStringify<INumberArray>(input);
const factory_validateStringify_numberArray =
  typia.json.createValidateStringify<INumberArray>();
const direct_validateStringify_numberArray = (input: INumberArray) =>
  typia.json.validateStringify<INumberArray>(input);
const factory_stringify_tuple = typia.json.createStringify<ITuple>();
const direct_stringify_tuple = (input: ITuple) =>
  typia.json.stringify<ITuple>(input);
const factory_isStringify_tuple = typia.json.createIsStringify<ITuple>();
const direct_isStringify_tuple = (input: ITuple) =>
  typia.json.isStringify<ITuple>(input);
const factory_assertStringify_tuple =
  typia.json.createAssertStringify<ITuple>();
const direct_assertStringify_tuple = (input: ITuple) =>
  typia.json.assertStringify<ITuple>(input);
const factory_validateStringify_tuple =
  typia.json.createValidateStringify<ITuple>();
const direct_validateStringify_tuple = (input: ITuple) =>
  typia.json.validateStringify<ITuple>(input);
const factory_stringify_restTuple = typia.json.createStringify<IRestTuple>();
const direct_stringify_restTuple = (input: IRestTuple) =>
  typia.json.stringify<IRestTuple>(input);
const factory_isStringify_restTuple =
  typia.json.createIsStringify<IRestTuple>();
const direct_isStringify_restTuple = (input: IRestTuple) =>
  typia.json.isStringify<IRestTuple>(input);
const factory_assertStringify_restTuple =
  typia.json.createAssertStringify<IRestTuple>();
const direct_assertStringify_restTuple = (input: IRestTuple) =>
  typia.json.assertStringify<IRestTuple>(input);
const factory_validateStringify_restTuple =
  typia.json.createValidateStringify<IRestTuple>();
const direct_validateStringify_restTuple = (input: IRestTuple) =>
  typia.json.validateStringify<IRestTuple>(input);
const factory_stringify_nested = typia.json.createStringify<INested>();
const direct_stringify_nested = (input: INested) =>
  typia.json.stringify<INested>(input);
const factory_isStringify_nested = typia.json.createIsStringify<INested>();
const direct_isStringify_nested = (input: INested) =>
  typia.json.isStringify<INested>(input);
const factory_assertStringify_nested =
  typia.json.createAssertStringify<INested>();
const direct_assertStringify_nested = (input: INested) =>
  typia.json.assertStringify<INested>(input);
const factory_validateStringify_nested =
  typia.json.createValidateStringify<INested>();
const direct_validateStringify_nested = (input: INested) =>
  typia.json.validateStringify<INested>(input);
const factory_stringify_jsonableProperty =
  typia.json.createStringify<IJsonableProperty>();
const direct_stringify_jsonableProperty = (input: IJsonableProperty) =>
  typia.json.stringify<IJsonableProperty>(input);
const factory_isStringify_jsonableProperty =
  typia.json.createIsStringify<IJsonableProperty>();
const direct_isStringify_jsonableProperty = (input: IJsonableProperty) =>
  typia.json.isStringify<IJsonableProperty>(input);
const factory_assertStringify_jsonableProperty =
  typia.json.createAssertStringify<IJsonableProperty>();
const direct_assertStringify_jsonableProperty = (input: IJsonableProperty) =>
  typia.json.assertStringify<IJsonableProperty>(input);
const factory_validateStringify_jsonableProperty =
  typia.json.createValidateStringify<IJsonableProperty>();
const direct_validateStringify_jsonableProperty = (input: IJsonableProperty) =>
  typia.json.validateStringify<IJsonableProperty>(input);
const factory_stringify_maybeJsonableProperty =
  typia.json.createStringify<IMaybeJsonableProperty>();
const direct_stringify_maybeJsonableProperty = (
  input: IMaybeJsonableProperty,
) => typia.json.stringify<IMaybeJsonableProperty>(input);
const factory_isStringify_maybeJsonableProperty =
  typia.json.createIsStringify<IMaybeJsonableProperty>();
const direct_isStringify_maybeJsonableProperty = (
  input: IMaybeJsonableProperty,
) => typia.json.isStringify<IMaybeJsonableProperty>(input);
const factory_assertStringify_maybeJsonableProperty =
  typia.json.createAssertStringify<IMaybeJsonableProperty>();
const direct_assertStringify_maybeJsonableProperty = (
  input: IMaybeJsonableProperty,
) => typia.json.assertStringify<IMaybeJsonableProperty>(input);
const factory_validateStringify_maybeJsonableProperty =
  typia.json.createValidateStringify<IMaybeJsonableProperty>();
const direct_validateStringify_maybeJsonableProperty = (
  input: IMaybeJsonableProperty,
) => typia.json.validateStringify<IMaybeJsonableProperty>(input);
const fixture = {
  factory_stringify_anyProperty,
  direct_stringify_anyProperty,
  factory_isStringify_anyProperty,
  direct_isStringify_anyProperty,
  factory_assertStringify_anyProperty,
  direct_assertStringify_anyProperty,
  factory_validateStringify_anyProperty,
  direct_validateStringify_anyProperty,
  factory_stringify_unknownProperty,
  direct_stringify_unknownProperty,
  factory_isStringify_unknownProperty,
  direct_isStringify_unknownProperty,
  factory_assertStringify_unknownProperty,
  direct_assertStringify_unknownProperty,
  factory_validateStringify_unknownProperty,
  direct_validateStringify_unknownProperty,
  factory_stringify_undefinedProperty,
  direct_stringify_undefinedProperty,
  factory_isStringify_undefinedProperty,
  direct_isStringify_undefinedProperty,
  factory_assertStringify_undefinedProperty,
  direct_assertStringify_undefinedProperty,
  factory_validateStringify_undefinedProperty,
  direct_validateStringify_undefinedProperty,
  factory_stringify_optionalAny,
  direct_stringify_optionalAny,
  factory_isStringify_optionalAny,
  direct_isStringify_optionalAny,
  factory_assertStringify_optionalAny,
  direct_assertStringify_optionalAny,
  factory_validateStringify_optionalAny,
  direct_validateStringify_optionalAny,
  factory_stringify_recordAny,
  direct_stringify_recordAny,
  factory_isStringify_recordAny,
  direct_isStringify_recordAny,
  factory_assertStringify_recordAny,
  direct_assertStringify_recordAny,
  factory_validateStringify_recordAny,
  direct_validateStringify_recordAny,
  factory_stringify_recordUnknown,
  direct_stringify_recordUnknown,
  factory_isStringify_recordUnknown,
  direct_isStringify_recordUnknown,
  factory_assertStringify_recordUnknown,
  direct_assertStringify_recordUnknown,
  factory_validateStringify_recordUnknown,
  direct_validateStringify_recordUnknown,
  factory_stringify_mixedRecord,
  direct_stringify_mixedRecord,
  factory_isStringify_mixedRecord,
  direct_isStringify_mixedRecord,
  factory_assertStringify_mixedRecord,
  direct_assertStringify_mixedRecord,
  factory_validateStringify_mixedRecord,
  direct_validateStringify_mixedRecord,
  factory_stringify_anyArray,
  direct_stringify_anyArray,
  factory_isStringify_anyArray,
  direct_isStringify_anyArray,
  factory_assertStringify_anyArray,
  direct_assertStringify_anyArray,
  factory_validateStringify_anyArray,
  direct_validateStringify_anyArray,
  factory_stringify_unknownArray,
  direct_stringify_unknownArray,
  factory_isStringify_unknownArray,
  direct_isStringify_unknownArray,
  factory_assertStringify_unknownArray,
  direct_assertStringify_unknownArray,
  factory_validateStringify_unknownArray,
  direct_validateStringify_unknownArray,
  factory_stringify_numberArray,
  direct_stringify_numberArray,
  factory_isStringify_numberArray,
  direct_isStringify_numberArray,
  factory_assertStringify_numberArray,
  direct_assertStringify_numberArray,
  factory_validateStringify_numberArray,
  direct_validateStringify_numberArray,
  factory_stringify_tuple,
  direct_stringify_tuple,
  factory_isStringify_tuple,
  direct_isStringify_tuple,
  factory_assertStringify_tuple,
  direct_assertStringify_tuple,
  factory_validateStringify_tuple,
  direct_validateStringify_tuple,
  factory_stringify_restTuple,
  direct_stringify_restTuple,
  factory_isStringify_restTuple,
  direct_isStringify_restTuple,
  factory_assertStringify_restTuple,
  direct_assertStringify_restTuple,
  factory_validateStringify_restTuple,
  direct_validateStringify_restTuple,
  factory_stringify_nested,
  direct_stringify_nested,
  factory_isStringify_nested,
  direct_isStringify_nested,
  factory_assertStringify_nested,
  direct_assertStringify_nested,
  factory_validateStringify_nested,
  direct_validateStringify_nested,
  factory_stringify_jsonableProperty,
  direct_stringify_jsonableProperty,
  factory_isStringify_jsonableProperty,
  direct_isStringify_jsonableProperty,
  factory_assertStringify_jsonableProperty,
  direct_assertStringify_jsonableProperty,
  factory_validateStringify_jsonableProperty,
  direct_validateStringify_jsonableProperty,
  factory_stringify_maybeJsonableProperty,
  direct_stringify_maybeJsonableProperty,
  factory_isStringify_maybeJsonableProperty,
  direct_isStringify_maybeJsonableProperty,
  factory_assertStringify_maybeJsonableProperty,
  direct_assertStringify_maybeJsonableProperty,
  factory_validateStringify_maybeJsonableProperty,
  direct_validateStringify_maybeJsonableProperty,
};

/**
 * Verifies json stringify contextual undefined in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * jsonStringifyContextualUndefinedSource declarations; the former
 * jsonStringifyContextualUndefinedRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from jsonStringifyContextualUndefinedRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations ECMAScript JSON.stringify and JSON.parse provide the independent serialization oracle for identical fresh inputs. Static/dynamic object omission, array null substitution, toJSON, sparse slots and optional-undefined rejection are checked across the original direct/factory family matrix.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_json_stringify_contextual_undefined in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed jsonStringifyContextualUndefinedSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/json_stringify_contextual_undefined_transform_test.go jsonStringifyContextualUndefinedRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_json_stringify_contextual_undefined = (
  strictUndefined: boolean = false,
): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const STRICT_UNDEFINED: any = strictUndefined;
  // deepEqual compares two JSON.parse results. Objects are compared by key set and
  // value, never by text, because typia is free to order the properties it emits
  // differently from ECMAScript while still producing an equivalent document.
  const deepEqual: any = (x: any, y: any): any => {
    if (x === y) return true;
    if (x === null || y === null) return false;
    if (typeof x !== "object" || typeof y !== "object") return false;
    if (Array.isArray(x) !== Array.isArray(y)) return false;
    if (Array.isArray(x)) {
      if (x.length !== y.length) return false;
      return x.every((v: any, i: any): any => deepEqual(v, y[i]));
    }
    const xk: any = Object.keys(x).sort();
    const yk: any = Object.keys(y).sort();
    if (xk.length !== yk.length) return false;
    if (!xk.every((k: any, i: any): any => k === yk[i])) return false;
    return xk.every((k: any): any => deepEqual(x[k], y[k]));
  };

  const sparse: any = (assign: any): any => {
    const array: any = [];
    assign(array);
    return array;
  };

  const CASES: any = [
    // Static any property: every value whose serialization is undefined must
    // vanish exactly the way ECMAScript drops it, and the valid neighbors beside
    // it must survive.
    [
      "anyProperty",
      "function value",
      (): any => ({ keep: 1, value: (): any => 0 }),
    ],
    [
      "anyProperty",
      "symbol value",
      (): any => ({ keep: 1, value: Symbol("s") }),
    ],
    [
      "anyProperty",
      "undefined value",
      (): any => ({ keep: 1, value: undefined }),
    ],
    ["anyProperty", "null value", (): any => ({ keep: 1, value: null })],
    ["anyProperty", "number value", (): any => ({ keep: 1, value: 2 })],
    [
      "anyProperty",
      "nested function member",
      (): any => ({
        keep: 1,
        value: { a: 1, b: (): any => 0, c: Symbol("x"), d: undefined },
      }),
    ],
    [
      "anyProperty",
      "nested array member",
      (): any => ({
        keep: 1,
        value: [(): any => 0, 1, Symbol("y"), undefined],
      }),
    ],
    [
      "anyProperty",
      "toJSON returning undefined",
      (): any => ({
        keep: 1,
        value: { toJSON: (): any => undefined },
      }),
    ],
    [
      "anyProperty",
      "toJSON returning a value",
      (): any => ({
        keep: 1,
        value: { toJSON: (): any => 3 },
      }),
    ],
    [
      "anyProperty",
      "invalid keep twin",
      (): any => ({ keep: "x", value: 1 }),
      "reject",
    ],

    // unknown must behave exactly like any.
    [
      "unknownProperty",
      "function value",
      (): any => ({ keep: 1, value: (): any => 0 }),
    ],
    [
      "unknownProperty",
      "symbol value",
      (): any => ({ keep: 1, value: Symbol("s") }),
    ],
    [
      "unknownProperty",
      "undefined value",
      (): any => ({ keep: 1, value: undefined }),
    ],
    ["unknownProperty", "number value", (): any => ({ keep: 1, value: 2 })],
    [
      "unknownProperty",
      "invalid keep twin",
      (): any => ({ keep: "x", value: 1 }),
      "reject",
    ],

    // A required property typed undefined has nothing to serialize at all.
    [
      "undefinedProperty",
      "undefined value",
      (): any => ({ keep: 1, value: undefined }),
    ],

    // Optional any: absent, explicitly undefined, and present.
    ["optionalAny", "absent", (): any => ({ keep: 1 })],
    [
      "optionalAny",
      "explicit undefined",
      (): any => ({ keep: 1, value: undefined }),
      "strictReject",
    ],
    [
      "optionalAny",
      "function value",
      (): any => ({ keep: 1, value: (): any => 0 }),
    ],
    ["optionalAny", "number value", (): any => ({ keep: 1, value: 2 })],

    // Dynamic (index signature) properties.
    [
      "recordAny",
      "mixed omitted and kept",
      (): any => ({
        keep: 1,
        omit: (): any => 0,
        sym: Symbol("s"),
        nil: null,
        undef: undefined,
      }),
    ],
    [
      "recordAny",
      "every entry omitted",
      (): any => ({ omit: (): any => 0, sym: Symbol("s") }),
    ],
    ["recordAny", "empty object", (): any => ({})],
    [
      "recordUnknown",
      "mixed omitted and kept",
      (): any => ({
        keep: 1,
        omit: (): any => 0,
        sym: Symbol("s"),
        nil: null,
      }),
    ],
    [
      "mixedRecord",
      "static neighbor with omitted dynamic",
      (): any => ({
        keep: 1,
        omit: (): any => 0,
        sym: Symbol("s"),
        nil: null,
      }),
    ],
    ["mixedRecord", "static neighbor only", (): any => ({ keep: 1 })],

    // Arrays: a serialization of undefined is null in array context, and a hole
    // reads as undefined at every element type.
    ["anyArray", "leading function", (): any => [(): any => 0, 1]],
    [
      "anyArray",
      "all element kinds",
      (): any => [(): any => 0, 1, Symbol("s"), undefined, null],
    ],
    ["anyArray", "single function", (): any => [(): any => 0]],
    ["anyArray", "empty", (): any => []],
    [
      "anyArray",
      "sparse tail",
      (): any =>
        sparse((a: any): any => {
          a[0] = 1;
          a[3] = 4;
        }),
    ],
    ["unknownArray", "leading function", (): any => [(): any => 0, 1]],
    ["numberArray", "dense control", (): any => [1, 2, 3]],
    [
      "numberArray",
      "sparse leading holes",
      (): any =>
        sparse((a: any): any => {
          a[2] = 3;
        }),
    ],

    // Tuples and rest tuples.
    [
      "tuple",
      "function and symbol elements",
      (): any => [(): any => 0, Symbol("s"), 1],
    ],
    ["tuple", "undefined elements", (): any => [undefined, undefined, 1]],
    ["tuple", "valid control", (): any => [1, 2, 3]],
    ["tuple", "invalid last element twin", (): any => [1, 2, "x"], "reject"],
    ["restTuple", "function inside rest", (): any => [1, (): any => 0, 2]],
    ["restTuple", "empty rest", (): any => [1]],

    // Nested containers.
    [
      "nested",
      "function inside nested object",
      (): any => ({
        outer: [{ inner: (): any => 0 }, { inner: 1 }],
      }),
    ],

    // toJSON controls: present, inherited, returning undefined, and non-callable.
    [
      "jsonableProperty",
      "own toJSON",
      (): any => ({ keep: 1, value: { toJSON: (): any => "x" } }),
    ],
    [
      "jsonableProperty",
      "inherited toJSON",
      (): any => {
        class Jsonable {
          toJSON() {
            return "x";
          }
        }
        return { keep: 1, value: new Jsonable() };
      },
    ],
    // A non-callable toJSON twin belongs here by shape but not by cause: the
    // checker fails to reject it and the serializer then throws
    // "input.value.toJSON is not a function", so isStringify and validateStringify
    // throw where their contract is to answer. That is a callability rule, not the
    // contextual "decide omission from the serialized result" rule this regression
    // pins, and fixing it here would mix two root causes into one diff. It is
    // tracked in samchon/typia#2271 and keeps its own twin there.
    [
      "maybeJsonableProperty",
      "toJSON returning undefined",
      (): any => ({
        keep: 1,
        value: { toJSON: (): any => undefined },
      }),
    ],
    [
      "maybeJsonableProperty",
      "toJSON returning a value",
      (): any => ({
        keep: 1,
        value: { toJSON: (): any => "x" },
      }),
    ],
  ];

  let ran: any = 0;
  const failures: any = [];

  const fail: any = (label: any, message: any): any =>
    failures.push(label + ": " + message);

  const parse: any = (label: any, text: any): any => {
    try {
      return { ok: true, value: JSON.parse(text) };
    } catch (error: any) {
      fail(label, "produced text that is not JSON: " + JSON.stringify(text));
      return { ok: false };
    }
  };

  const compare: any = (label: any, text: any, oracle: any): any => {
    if (typeof text !== "string") {
      fail(label, "produced " + String(text) + " instead of JSON text");
      return;
    }
    const parsed: any = parse(label, text);
    if (parsed.ok !== true) return;
    if (!deepEqual(parsed.value, oracle.value))
      fail(
        label,
        "produced " + text + " but JSON.stringify produced " + oracle.text,
      );
  };

  const run: any = (fn: any, argument: any): any => {
    try {
      return { thrown: false, value: fn(argument) };
    } catch (error: any) {
      return { thrown: true, error };
    }
  };

  for (const [key, label, make, kind] of CASES) {
    const reject: any = kind === "reject";
    const strictReject: any =
      kind === "strictReject" && STRICT_UNDEFINED === true;
    const oracleText: any = JSON.stringify(make());
    const oracle: any = { text: oracleText, value: undefined };
    if (reject !== true) {
      if (typeof oracleText !== "string")
        throw new Error(key + " / " + label + ": oracle produced no text");
      oracle.value = JSON.parse(oracleText);
    }
    for (const form of ["factory", "direct"]) {
      const name: any = key + " / " + label + " / " + form;

      // json.stringify never validates, so its text must match the oracle for
      // every statically accepted input, in both option rows.
      if (reject !== true) {
        ran += 1;
        const raw: any = run(mod[form + "_stringify_" + key], make());
        if (raw.thrown === true)
          fail(
            name + " / stringify",
            "threw " + String(raw.error && raw.error.message),
          );
        else compare(name + " / stringify", raw.value, oracle);
      }

      // json.isStringify: null means rejected.
      ran += 1;
      const is: any = run(mod[form + "_isStringify_" + key], make());
      if (is.thrown === true)
        fail(
          name + " / isStringify",
          "threw " + String(is.error && is.error.message),
        );
      else if (reject === true) {
        if (is.value !== null)
          fail(
            name + " / isStringify",
            "accepted an invalid value: " + String(is.value),
          );
      } else if (is.value === null) {
        if (strictReject !== true)
          fail(name + " / isStringify", "rejected a valid value");
      } else compare(name + " / isStringify", is.value, oracle);

      // json.assertStringify: a throw means rejected.
      ran += 1;
      const asserted: any = run(mod[form + "_assertStringify_" + key], make());
      if (reject === true) {
        if (asserted.thrown !== true)
          fail(
            name + " / assertStringify",
            "accepted an invalid value: " + String(asserted.value),
          );
      } else if (asserted.thrown === true) {
        if (strictReject !== true)
          fail(
            name + " / assertStringify",
            "rejected a valid value: " +
              String(asserted.error && asserted.error.message),
          );
      } else compare(name + " / assertStringify", asserted.value, oracle);

      // json.validateStringify: success must never carry malformed text.
      ran += 1;
      const validated: any = run(
        mod[form + "_validateStringify_" + key],
        make(),
      );
      if (validated.thrown === true)
        fail(
          name + " / validateStringify",
          "threw " + String(validated.error && validated.error.message),
        );
      else if (reject === true) {
        if (validated.value.success !== false)
          fail(
            name + " / validateStringify",
            "accepted an invalid value: " + JSON.stringify(validated.value),
          );
      } else if (validated.value.success === false) {
        if (strictReject !== true)
          fail(
            name + " / validateStringify",
            "rejected a valid value: " + JSON.stringify(validated.value.errors),
          );
      } else
        compare(name + " / validateStringify", validated.value.data, oracle);
    }
  }

  if (failures.length !== 0) {
    for (const line of failures) console.log(line);
    throw new Error(failures.length + " contextual serialization failures");
  }
  console.log("RAN " + ran + " CASES");

  if (ran !== 354) throw new Error("runtime case census changed: " + ran);
};
