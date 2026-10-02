import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

type IUniqueBooleans = Array<{ value: boolean }> &
  tags.MinItems<2> &
  tags.MaxItems<2> &
  tags.UniqueItems;

/**
 * Verifies random UniqueItems generation shares validator equality and stops.
 *
 * The generator previously used Set reference identity, so two structurally
 * equal objects were accepted even though validation rejected them, while a
 * finite primitive domain could loop forever. A deterministic generator makes
 * both outcomes observable without timing guesses.
 *
 * 1. Alternate a two-value object domain and require a valid two-element result.
 * 2. Collapse the domain to one structural value while requesting two.
 * 3. Require a deterministic exhaustion error instead of an invalid result or
 *    non-termination.
 *
 * @evidence contracts/testing.md#behavioral-verification Alternating supported boolean callback produces two structurally distinct objects at exact length2; a constant false callback must exhaust uniqueness and throw an Error naming unique items.
 * @evidence contracts/testing.md#independent-expectations The two-member structural domain is authored independently, and the constant callback has only one possible object value. Generated is is an additional correlated postcondition.
 * @evidence contracts/testing.md#distinguishing-cases Changing only the boolean callback supplies the possible/impossible twin while length and tag requirements stay fixed; diagnostic checks retain both Error identity and uniqueness feedback.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_unique_items_structural in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_unique_items_structural = (): void => {
  let next = false;
  const possible: IUniqueBooleans = typia.random<IUniqueBooleans>({
    boolean: () => (next = !next),
  });
  TestEquality.equals("possible length", possible.length, 2);
  TestEquality.equals(
    "possible validates",
    typia.is<IUniqueBooleans>(possible),
    true,
  );

  let error: unknown;
  try {
    typia.random<IUniqueBooleans>({
      boolean: () => false,
    });
  } catch (exp) {
    error = exp;
  }
  TestValidator.predicate("finite domain throws", () => error instanceof Error);
  TestValidator.predicate("diagnostic identifies uniqueness exhaustion", () =>
    (error as Error).message.includes("unique items"),
  );
};
