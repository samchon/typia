import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification The generated validator adapter reports escaped property keys intact.
 * @evidence contracts/testing.md#independent-expectations Eight authored keys independently define exact one-segment issue paths and the expected count.
 * @evidence contracts/testing.md#distinguishing-cases Quote, backslash, newline, tab, bell, NUL, Unicode separator and punctuation failures remain beside a valid identifier.
 * @evidence contracts/testing.md#execution-ownership The schema start runner discovers test_standard_schema_escaped_key_paths through DynamicExecutor and ttsx with the native typia plugin; its exported body owns the assertions.
 * @evidence contracts/e2e.md#necessary-boundary createValidate emits paths parsed by the Standard Schema adapter; direct adapter units cannot detect malformed emitted escaping.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load and native plugin artifact. Its inputs do not build or launch a separate host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and generated results are local to the case. The suite owns the shared host lifetime; no cold cache transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Quote, backslash, newline, tab, bell, NUL, Unicode separator and punctuation failures remain beside a valid identifier. Original inputs and assertions remain; source review and final execution are reported separately.
 */
export const test_standard_schema_escaped_key_paths = (): void => {
  const validator = typia.createValidate<IHostileKeys>();
  const input: Record<string, unknown> = { plainIdentifier: 1 };
  for (const key of KEYS) input[key] = "not a number";

  const result = validator["~standard"].validate(input);
  if (result instanceof Promise || result.issues === undefined)
    throw new Error("Expected escaped keys to return Standard Schema issues.");

  TestEquality.equals("issue count", KEYS.length, result.issues.length);
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
