import type { OpenApi } from "@typia/interface";

import { _isUniqueItems } from "./_isUniqueItems";
import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_RANGE = 5;
const DEFAULT_RECURSIVE_RANGE = 2;

/**
 * Consecutive duplicates that end a unique draw once its floor is satisfied.
 *
 * For independent uniform draws with one unseen value among four, sixty-four
 * misses in a row have probability `0.75 ** 64`. This stopping rule does not
 * prove domain exhaustion. Below the floor it is disabled, but the total
 * attempt budget can still end before a reachable minimum is observed.
 */
const STALE_LIMIT = 64;

/**
 * Generate a random array from an array schema.
 *
 * The length is drawn between the bounds, with a default minimum of one, or
 * zero on a recursive cycle. For a unique array the count is a preference above
 * the minimum: drawing stops at the total attempt budget or, after reaching the
 * minimum, a run of duplicates. A result below the minimum throws even when
 * enough distinct values exist but were not observed within that budget.
 *
 * The optional source supplies draws in [0, 1); it defaults to the platform
 * source resolved when this helper is called. Nested draws use the same
 * source.
 *
 * @evidence contracts/common.md#principled-implementation The length is drawn between the schema's bounds with a default minimum of one, or zero on a recursive cycle so graph-shaped data ends, and elements come from the supplied callback. Unique generation stops at the requested count, count * 100 + 1000 total attempts, or sixty-four consecutive duplicates after the minimum is met. These bounded observations do not prove domain exhaustion; a result below the minimum throws even if the callback could produce more distinct values. A returned result always meets the minimum, while the chosen count is a preference above it.
 * @evidence contracts/common.md#clear-and-simple-design One function with a plain branch and a unique branch; defaults are module constants.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The unique branch accepts a result shorter than the preferred count when it meets the minimum. Failure means the minimum was not observed within the finite attempt budget, rather than proving it unreachable; no callback domain is inferred from repeated duplicates.
 * @evidence contracts/common.md#meaningful-documentation The doc states the length rule, the unique-draw budget and the stale limit, and the module comments explain the reasoning.
 */
export const _randomArray = <T>(
  props: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
    element: (index: number, count: number) => T;
    recursive?: boolean;
  },
  source: () => number = Math.random,
) => {
  const defaultMinimum: number =
    props.recursive === true ? 0 : DEFAULT_MIN_ITEMS;
  const minimum: number =
    props.minItems ??
    Math.min(props.maxItems ?? defaultMinimum, defaultMinimum);
  const count: number = _randomInteger(
    {
      type: "integer",
      minimum,
      maximum:
        props.maxItems ??
        minimum +
          (props.recursive === true ? DEFAULT_RECURSIVE_RANGE : DEFAULT_RANGE),
    },
    source,
  );
  if (props.uniqueItems !== true)
    return new Array(count).fill(null).map((_, i) => props.element(i, count));
  // How many distinct values the element can take is not knowable from here --
  // `element` is a closure over whatever the transform emitted, from `boolean`
  // to a recursive object -- so the count above is a preference, not a
  // contract. Stop at the bounded attempt budget or duplicate-run limit, then
  // keep what was reached if it meets the minimum. Neither limit proves that
  // the callback's domain has nothing new left.
  //
  // Failing on that budget instead is what made `Array<boolean> &
  // UniqueItems` throw on two draws in three: `[true, false]` satisfies the
  // declaration at every count, and a count of five is unreachable for a
  // domain of two however many times it is redrawn. Only a result below the
  // floor is a real failure, which is still the honest outcome for a window
  // like `MinItems<3>` over a domain of two.
  //
  // Below the floor the whole budget is available, though a rare or biased
  // callback can still miss enough distinct values before it ends. Above the
  // floor further attempts only increase length, so `STALE_LIMIT` consecutive
  // duplicates end that search early. This bounds repeated work for nested
  // small-domain unique arrays without claiming the domain is exhausted.
  const elements: T[] = [];
  const maximumAttempts: number = count * 100 + 1000;
  let stale: number = 0;
  for (
    let attempts = 0;
    elements.length !== count && attempts !== maximumAttempts;
    attempts++
  ) {
    const candidate: T = props.element(elements.length, count);
    if (elements.every((element) => _isUniqueItems([element, candidate]))) {
      elements.push(candidate);
      stale = 0;
    } else if (elements.length >= minimum && ++stale === STALE_LIMIT) break;
  }
  if (elements.length < minimum)
    throw new Error(
      "Unable to generate enough unique items; the element domain may be too small.",
    );
  return elements;
};
