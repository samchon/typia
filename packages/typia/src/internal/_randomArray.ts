import type { OpenApi } from "@typia/interface";

import { _isUniqueItems } from "./_isUniqueItems";
import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_RANGE = 5;
const DEFAULT_RECURSIVE_RANGE = 2;

/**
 * Consecutive duplicates that end a unique draw once its floor is satisfied.
 *
 * The worst case a domain can still hide is one value left among a handful:
 * with one of four remaining, sixty-four misses in a row is a `0.75 ** 64`
 * event, about one in a hundred million. Below the floor this limit does not
 * apply at all, so it can never fail a request the domain could satisfy.
 */
const STALE_LIMIT = 64;

export const _randomArray = <T>(
  props: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
    element: (index: number, count: number) => T;
    recursive?: boolean;
  },
) => {
  const defaultMinimum: number =
    props.recursive === true ? 0 : DEFAULT_MIN_ITEMS;
  const minimum: number =
    props.minItems ??
    Math.min(props.maxItems ?? defaultMinimum, defaultMinimum);
  const count: number = _randomInteger({
    type: "integer",
    minimum,
    maximum:
      props.maxItems ??
      minimum +
        (props.recursive === true ? DEFAULT_RECURSIVE_RANGE : DEFAULT_RANGE),
  });
  if (props.uniqueItems !== true)
    return new Array(count).fill(null).map((_, i) => props.element(i, count));
  // How many distinct values the element can take is not knowable from here --
  // `element` is a closure over whatever the transform emitted, from `boolean`
  // to a recursive object -- so the count above is a preference, not a
  // contract. Draw until the budget says the domain has nothing new left, then
  // keep what was reached.
  //
  // Failing on that budget instead is what made `Array<boolean> &
  // UniqueItems` throw on two draws in three: `[true, false]` satisfies the
  // declaration at every count, and a count of five is unreachable for a
  // domain of two however many times it is redrawn. Only a result below the
  // floor is a real failure, which is still the honest outcome for a window
  // like `MinItems<3>` over a domain of two.
  //
  // Below the floor the whole budget is spent, because stopping early there
  // would fail a request the domain can still satisfy. Above it every further
  // attempt is only buying length, so a run of `STALE_LIMIT` duplicates is
  // taken as the domain saying it has nothing left. Without that, each nesting
  // level of a small-domain unique array multiplies the full budget into the
  // level above it.
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
