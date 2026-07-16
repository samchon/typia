import type { OpenApi } from "@typia/interface";

import { _isUniqueItems } from "./_isUniqueItems";
import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_RANGE = 5;
const DEFAULT_RECURSIVE_RANGE = 2;

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
  const elements: T[] = [];
  const maximumAttempts: number = count * 100 + 1000;
  for (let attempts = 0; elements.length !== count; attempts++) {
    if (attempts === maximumAttempts)
      throw new Error(
        "Unable to generate enough unique items; the element domain may be too small.",
      );
    const candidate: T = props.element(elements.length, count);
    if (elements.every((element) => _isUniqueItems([element, candidate])))
      elements.push(candidate);
  }
  return elements;
};
