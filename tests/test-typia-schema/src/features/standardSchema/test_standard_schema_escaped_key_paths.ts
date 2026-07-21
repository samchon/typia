import { TestValidator } from "@nestia/e2e";
import typia from "typia";

interface IHostileKeys {
  'quote"key': number;
  "back\\slash": number;
  "line\nbreak": number;
  "tab\tkey": number;
  "bell\u0007key": number;
  "nul\u0000key": number;
  "sep\u2028key": number;
  "plain-key": number;
  plainIdentifier: number;
}

const KEYS: readonly string[] = [
  'quote"key',
  "back\\slash",
  "line\nbreak",
  "tab\tkey",
  "bell\u0007key",
  "nul\u0000key",
  "sep\u2028key",
  "plain-key",
];

/**
 * Verifies Standard Schema reports issues for keys that need escaping.
 *
 * The transform folds a sole-literal key into the emitted path as source text,
 * and `~standard.validate()` parses that path back with JSON.parse. Escaping
 * the key for Go rather than for JavaScript left a raw control character in the
 * path, so JSON.parse threw and destroyed the whole result instead of reporting
 * the one property that failed. A quote-only fix leaves that throw live, which
 * is why the control characters are pinned here beside the quote.
 *
 * 1. Validate an object whose keys carry quotes, backslashes, and control
 *    characters through the Standard Schema adapter.
 * 2. Assert it returns issues rather than throwing.
 * 3. Assert every issue path segment is the original key, unmangled.
 */
export const test_standard_schema_escaped_key_paths = (): void => {
  const validator = typia.createValidate<IHostileKeys>();
  const input: Record<string, unknown> = { plainIdentifier: 1 };
  for (const key of KEYS) input[key] = "not a number";

  const result = validator["~standard"].validate(input);
  if (result instanceof Promise || result.issues === undefined)
    throw new Error("Expected escaped keys to return Standard Schema issues.");

  TestValidator.equals("issue count", KEYS.length, result.issues.length);
  for (const key of KEYS)
    TestValidator.predicate(`issue path for ${JSON.stringify(key)}`, () =>
      result.issues!.some(
        (issue) =>
          issue.path?.length === 1 && segmentKey(issue.path[0]) === key,
      ),
    );
};

const segmentKey = (
  segment: PropertyKey | { readonly key: PropertyKey } | undefined,
): PropertyKey | undefined =>
  segment !== null && typeof segment === "object" && "key" in segment
    ? segment.key
    : segment;
