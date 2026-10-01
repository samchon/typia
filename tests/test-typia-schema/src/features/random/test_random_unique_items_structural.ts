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
 * @evidence contracts/testing.md#behavioral-verification typia.random, typia.is is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (possible length; possible validates; finite domain throws; diagnostic identifies uniqueness exhaustion). The case documents its purpose as: Verifies random UniqueItems generation shares validator equality and stops.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The generator previously used Set reference identity, so two structurally equal objects were accepted even though validation rejected them, while a finite primitive domain could loop forever. A deterministic generator makes both outcomes observable without timing guesses. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (possible length; possible validates; finite domain throws; diagnostic identifies uniqueness exhaustion) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_unique_items_structural is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
