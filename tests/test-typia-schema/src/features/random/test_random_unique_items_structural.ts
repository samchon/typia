import { TestValidator } from "@nestia/e2e";
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
 */
export const test_random_unique_items_structural = (): void => {
  let next = false;
  const possible: IUniqueBooleans = typia.random<IUniqueBooleans>({
    boolean: () => (next = !next),
  });
  TestValidator.equals("possible length", possible.length, 2);
  TestValidator.equals(
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
