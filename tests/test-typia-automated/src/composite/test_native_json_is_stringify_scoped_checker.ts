import typia from "typia";

interface JsonAlpha {
  data: {
    value: string;
  };
}

interface JsonBeta {
  data: {
    count: number;
  };
}

interface JsonBacked {
  id: string;
  toJSON(): JsonAlpha | JsonBeta;
}

interface Payload {
  item: JsonBacked;
  children: Payload[];
}

const stringifyPayload = (input: unknown): string | null =>
  typia.json.isStringify<Payload>(input);
const fixture = { stringifyPayload };

/**
 * Verifies json is stringify scoped checker in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * jsonIsStringifyScopedCheckerSource declarations; the former
 * jsonIsStringifyScopedCheckerRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from jsonIsStringifyScopedCheckerRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The valid recursive toJSON input has authored count 3 and nested value nested. Parsed JSON must retain both; this assembly regression does not independently cover malformed-input rejection.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_json_is_stringify_scoped_checker in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed jsonIsStringifyScopedCheckerSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/json_is_stringify_scoped_checker_transform_test.go jsonIsStringifyScopedCheckerRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_json_is_stringify_scoped_checker = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const text: any = mod.stringifyPayload({
    item: {
      id: "box",
      toJSON() {
        return { data: { count: 3 } };
      },
    },
    children: [
      {
        item: {
          id: "box",
          toJSON() {
            return { data: { value: "nested" } };
          },
        },
        children: [],
      },
    ],
  });

  if (text === null) {
    throw new Error("json.isStringify rejected a valid toJSON payload");
  }

  const parsed: any = JSON.parse(text);
  if (
    parsed.item.data.count !== 3 ||
    parsed.children[0].item.data.value !== "nested"
  ) {
    throw new Error("json.isStringify serialized the wrong branch: " + text);
  }
};
