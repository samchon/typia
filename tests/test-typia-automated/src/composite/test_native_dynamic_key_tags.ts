import assert from "node:assert";
import typia, { tags } from "typia";

interface IPatternKey {
  [key: string & tags.Pattern<"^ab+$">]: string;
}
interface ILengthKey {
  [key: string & tags.MinLength<3>]: string;
}
interface INumericKey {
  [key: number & tags.Minimum<0> & tags.Maximum<9>]: string;
}
interface IPlainKey {
  [key: string]: string;
}
interface ITemplateKey {
  [key: `prefix_${string}`]: string;
}

const isPatternKey = typia.createIs<IPatternKey>();
const isLengthKey = typia.createIs<ILengthKey>();
const isNumericKey = typia.createIs<INumericKey>();
const isPlainKey = typia.createIs<IPlainKey>();
const isTemplateKey = typia.createIs<ITemplateKey>();
const fixture = {
  isPatternKey,
  isLengthKey,
  isNumericKey,
  isPlainKey,
  isTemplateKey,
};

/**
 * Verifies dynamic key tags in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original dynamicKeyTagsSource
 * declarations; the former dynamicKeyTagsRuntimeRunner observations execute in
 * the existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from dynamicKeyTagsRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The declared regular expression, Unicode-character minimum and numeric range establish the key verdicts. Untagged keys and surplus template keys retain permissive is semantics; they are rejecting controls against over-constraining unrelated keys.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_dynamic_key_tags in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed dynamicKeyTagsSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/dynamic_key_tags_transform_test.go dynamicKeyTagsRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_dynamic_key_tags = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;

  const main: any = mod;

  // A key that satisfies its tag is accepted; one that violates it is not. Both
  // directions matter: before the fix every one of these returned true.
  assert.strictEqual(
    main.isPatternKey({ abb: "x" }),
    true,
    "pattern key accepted",
  );
  assert.strictEqual(
    main.isPatternKey({ zzz: "x" }),
    false,
    "non-pattern key rejected",
  );

  assert.strictEqual(
    main.isLengthKey({ abc: "x" }),
    true,
    "long enough key accepted",
  );
  assert.strictEqual(
    main.isLengthKey({ ab: "x" }),
    false,
    "too short key rejected",
  );

  // The length is counted in characters, as MinLength means everywhere else: two
  // astral characters are four code units but two characters, so they are short.
  assert.strictEqual(
    main.isLengthKey({ "\u{1f600}\u{1f600}\u{1f600}": "x" }),
    true,
    "three astral characters accepted",
  );
  assert.strictEqual(
    main.isLengthKey({ "\u{1f600}\u{1f600}": "x" }),
    false,
    "two astral characters rejected",
  );

  assert.strictEqual(
    main.isNumericKey({ 5: "x" }),
    true,
    "in-range numeric key accepted",
  );
  assert.strictEqual(
    main.isNumericKey({ 10: "x" }),
    false,
    "out-of-range numeric key rejected",
  );
  assert.strictEqual(
    main.isNumericKey({ "-1": "x" }),
    false,
    "negative numeric key rejected",
  );

  // NEGATIVE CONTROL: an untagged signature stays unconstrained, so the fix
  // constrains only what was declared.
  assert.strictEqual(
    main.isPlainKey({ "anything at all": "x" }),
    true,
    "plain key accepted",
  );
  assert.strictEqual(
    main.isPlainKey({ "": "x" }),
    true,
    "empty plain key accepted",
  );

  // NEGATIVE CONTROL: a template literal constrains the key's *type*, not a tag on
  // it, so a key outside it is declared nowhere -- a surplus property, which "is"
  // accepts as it accepts any surplus property. Rejecting this one alongside a
  // broken tag is what the first attempt at the fix did, and it made the
  // equals-mode surplus report unreachable for the DynamicTemplate, DynamicUnion,
  // and DynamicComposite shapes.
  assert.strictEqual(
    main.isTemplateKey({ prefix_a: "x" }),
    true,
    "matching template key accepted",
  );
  assert.strictEqual(
    main.isTemplateKey({ prefix_a: 1 }),
    false,
    "matching template key with a wrong value rejected",
  );
  assert.strictEqual(
    main.isTemplateKey({ prefix_a: "x", wrong: "y" }),
    true,
    "a key outside the template is surplus, not a violation",
  );

  // The value is still checked, which it always was.
  assert.strictEqual(
    main.isLengthKey({ abc: 1 }),
    false,
    "wrong value type rejected",
  );
};
