import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies every NamingConvention string helper is total over the empty string.
 *
 * The helpers are siblings of one contract, so a caller that picks one by name
 * must not discover that a single member throws where the rest return `""`.
 * `localize` was exactly that outlier (#2136). Asserting the whole family in
 * one place makes the shared boundary a property of the namespace rather than
 * of whichever helper happened to be tested, so a future helper cannot quietly
 * reintroduce a partial member.
 *
 * 1. Collect every helper that maps a string to a string.
 * 2. Apply each to the empty string.
 * 3. Require `""` from all of them, with no throw.
 */
export const test_naming_convention_empty = (): void => {
  const helpers: [string, (str: string) => string][] = [
    ["camel", NamingConvention.camel],
    ["pascal", NamingConvention.pascal],
    ["snake", NamingConvention.snake],
    ["kebab", NamingConvention.kebab],
    ["capitalize", NamingConvention.capitalize],
    ["localize", NamingConvention.localize],
  ];
  for (const [name, convert] of helpers)
    TestValidator.equals(`${name}("")`, convert(""), "");
};
