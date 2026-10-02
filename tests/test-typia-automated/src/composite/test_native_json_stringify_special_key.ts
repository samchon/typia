import typia from "typia";

interface Special {
  'q"k': number;
  "back\\slash": number;
  "\t": number;
  "interp${bad}here": number;
  "": number;
  "`": number;
}

const stringifySpecial = typia.json.createStringify<Special>();
const isStringifySpecial = typia.json.createIsStringify<Special>();
const assertStringifySpecial = typia.json.createAssertStringify<Special>();
const validateStringifySpecial = typia.json.createValidateStringify<Special>();
const fixture = {
  stringifySpecial,
  isStringifySpecial,
  assertStringifySpecial,
  validateStringifySpecial,
};

/**
 * Verifies json stringify special key in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * jsonStringifySpecialKeySource declarations; the former
 * jsonStringifySpecialKeyRunner observations execute in the existing automated
 * worker. This detects a generated program whose output compiles but changes
 * these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from jsonStringifySpecialKeyRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations ECMAScript JSON.parse and authored property names establish escaping and recovered values for all four serializer families. Quote, backslash, tab, interpolation, empty and backtick keys retain exact content and property count; these valid-input cases do not claim malformed-input coverage.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_json_stringify_special_key in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed jsonStringifySpecialKeySource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/json_stringify_special_key_transform_test.go jsonStringifySpecialKeyRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_json_stringify_special_key = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const TAB: any = String.fromCharCode(9);
  const BQ: any = String.fromCharCode(96);

  const makeInput: any = (): any => {
    const input: any = {};
    input['q"k'] = 1;
    input["back\\slash"] = 2;
    input[TAB] = 3;
    input["interp${bad}here"] = 4;
    input[""] = 5;
    input[BQ] = 6;
    return input;
  };

  const entries: any = [
    ['q"k', 1],
    ["back\\slash", 2],
    [TAB, 3],
    ["interp${bad}here", 4],
    ["", 5],
    [BQ, 6],
  ];

  let ran: any = 0;

  const roundTrip: any = (label: any, text: any): any => {
    const parsed: any = JSON.parse(text);
    for (const [key, expected] of entries) {
      ran += 1;
      if (parsed[key] !== expected) {
        throw new Error(
          label +
            ": key " +
            JSON.stringify(key) +
            " round-trip failed; got " +
            JSON.stringify(parsed[key]) +
            " in " +
            text,
        );
      }
    }
    if (Object.keys(parsed).length !== entries.length) {
      throw new Error(label + ": unexpected key count in " + text);
    }
  };

  // json.createStringify: the raw serializer must emit valid JSON for every key.
  roundTrip("createStringify", mod.stringifySpecial(makeInput()));

  // json.createIsStringify: valid input serializes; the document must round-trip.
  const isText: any = mod.isStringifySpecial(makeInput());
  if (isText === null) {
    throw new Error("isStringify rejected a valid special-key object");
  }
  roundTrip("isStringify", isText);

  // json.createAssertStringify: valid input passes the guard, then serializes.
  roundTrip("assertStringify", mod.assertStringifySpecial(makeInput()));

  // json.createValidateStringify: success carries the serialized document.
  const validated: any = mod.validateStringifySpecial(makeInput());
  if (validated.success !== true) {
    throw new Error(
      "validateStringify rejected a valid special-key object: " +
        JSON.stringify(validated),
    );
  }
  roundTrip("validateStringify", validated.data);

  console.log("RAN " + ran + " CASES");

  if (ran !== 24) throw new Error("runtime case census changed: " + ran);
};
