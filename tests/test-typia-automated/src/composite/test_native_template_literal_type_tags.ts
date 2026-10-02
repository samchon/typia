import typia, { tags } from "typia";

type Tagged = tags.MaxLength<30> &
  tags.Pattern<"^[a-zA-Z0-9_]+$"> &
  `prefix${string}postfix`;
type TaggedUnion =
  | (`a${string}` & tags.MinLength<3>)
  | (`b${string}` & tags.MaxLength<5>);

const isTagged = typia.createIs<Tagged>();
const validateTagged = typia.createValidate<Tagged>();
const isTaggedUnion = typia.createIs<TaggedUnion>();
const fixture = { isTagged, validateTagged, isTaggedUnion };

/**
 * Verifies template literal type tags in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * templateLiteralTypeTagsSource declarations; the former
 * templateLiteralTypeTagsRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from templateLiteralTypeTagsRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The source's Pattern and length tags constrain the whole string after template matching. Authored pattern/length violators and union-arm boundaries establish expected verdicts and diagnostic tag names without reading the emitted checker.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_template_literal_type_tags in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed templateLiteralTypeTagsSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/template_literal_type_tags_transform_test.go templateLiteralTypeTagsRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_template_literal_type_tags = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  if (mod.isTagged("prefix_0123_postfix") !== true) {
    throw new Error("tag-conforming template string should pass is");
  }
  if (mod.isTagged('prefix;"+,df0123456789postfix') !== false) {
    throw new Error("pattern/length-violating template string should fail is");
  }
  if (mod.isTagged("prefix_basically_way_too_long_for_max_postfix") !== false) {
    throw new Error("over-length template string should fail is");
  }
  if (mod.isTagged("nomatch") !== false) {
    throw new Error("non-template string should keep failing is");
  }

  const invalid: any = mod.validateTagged('prefix;"+,df0123456789postfix');
  if (invalid.success !== false) {
    throw new Error("validate should reject the tag-violating template string");
  }
  if (
    !invalid.errors.some(
      (e: any): any =>
        e.expected.includes("Pattern") || e.expected.includes("MaxLength"),
    )
  ) {
    throw new Error(
      "validate error should name the violated tag: " +
        JSON.stringify(invalid.errors),
    );
  }
  if (mod.validateTagged("prefix_0123_postfix").success !== true) {
    throw new Error(
      "validate should accept the tag-conforming template string",
    );
  }

  if (mod.isTaggedUnion("abc") !== true) {
    throw new Error("a-branch string meeting MinLength should pass");
  }
  if (mod.isTaggedUnion("ab") !== false) {
    throw new Error("a-branch string violating MinLength should fail");
  }
  if (mod.isTaggedUnion("bcdef") !== true) {
    throw new Error("b-branch string meeting MaxLength should pass");
  }
  if (mod.isTaggedUnion("bcdefgh") !== false) {
    throw new Error("b-branch string violating MaxLength should fail");
  }
};
