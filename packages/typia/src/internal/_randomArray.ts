import type { OpenApi } from "@typia/interface";

import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_RANGE = 5;

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
    maximum: props.maxItems ?? minimum + DEFAULT_RANGE,
  });
  if (props.uniqueItems !== true)
    return new Array(count).fill(null).map((_, i) => props.element(i, count));
  const elements: Set<any> = new Set();
  while (elements.size !== count)
    elements.add(props.element(elements.size, count));
  return Array.from(elements);
};
