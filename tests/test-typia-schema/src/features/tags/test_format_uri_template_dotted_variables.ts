import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies native uri-template format validation accepts dotted variable names.
 *
 * RFC 6570 section 2.3 permits dots between nonempty variable-character runs.
 * The native format binding must preserve that grammar rather than rejecting
 * every dotted name or accepting an empty run around a dot.
 *
 * 1. Create the validator through the native Format tag producer.
 * 2. Accept dotted and percent-encoded names with prefix and explode modifiers.
 * 3. Reject empty variable-name runs and malformed modifiers.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated predicate accepts valid dotted URI-template variables and rejects adjacent malformed names and modifiers instead of applying an undotted-only format rule.
 * @evidence contracts/testing.md#independent-expectations RFC 6570 section 2.3 defines varname as vchar followed by optional-dot/vchar repetitions; section 2.4 permits explode or a one-to-four-digit nonzero prefix length. Authored verdicts derive from those productions, not another typia validator.
 * @evidence contracts/testing.md#distinguishing-cases Plain, multi-dot, percent-encoded, label-expansion, prefix and explode positives contrast with empty name runs, trailing/doubled dots, malformed percent encoding, zero/oversized prefix and combined modifiers.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_format_uri_template_dotted_variables in the schema start population; ttsx rewrites its createIs call using the native typia plugin, and this exported case owns all assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native Format metadata and generated runtime binding must reach the corrected URI-template predicate; a direct utility-validator test cannot detect a wrong emitted helper selection or missing transform.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite project, DynamicExecutor process and content-keyed native artifact without a separate build, installation or host per input.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The generated predicate and authored strings are invocation-local and mutate no shared state; ttsx owns compiler lifetime and artifact invalidation. This case asserts no cache transition.
 * @evidence contracts/e2e.md#preserved-coverage Existing datetime and URI-related cases remain; this added producer-boundary matrix complements the utility unit's direct schema validation without transferring or deleting its assertions.
 */
export const test_format_uri_template_dotted_variables = (): void => {
  const is = typia.createIs<string & tags.Format<"uri-template">>();
  for (const input of [
    "{name}",
    "{a.b}",
    "{a.b.c}",
    "{a%20b.c}",
    "{a.%2E}",
    "{+a.b}",
    "{.a.b}",
    "{a.b:3}",
    "{?a.b*}",
  ])
    TestEquality.equals(`accepts ${input}`, is(input), true);
  for (const input of [
    "{.a..b}",
    "{..a}",
    "{a.}",
    "{a..b}",
    "{a.%2}",
    "{a.b:0}",
    "{a.b:12345}",
    "{a.b*:3}",
    "{a.b:3*}",
  ])
    TestEquality.equals(`rejects ${input}`, is(input), false);
};
