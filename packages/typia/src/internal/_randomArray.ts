import { OpenApi } from "@typia/interface";

import { _randomInteger } from "./_randomInteger";

export const _randomArray = <T>(
  props: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
    element: (index: number, count: number) => T;
  },
) => {
  const count: number = _randomInteger({
    type: "integer",
    minimum: (props.minItems ?? 0) satisfies number as number,
    maximum: props.maxItems ?? (props.minItems ?? 0) + 5,
  });
  if (props.uniqueItems !== true)
    return new Array(count).fill(null).map((_, i) => props.element(i, count));
  const elements: Set<any> = new Set();
  let attempts: number = 0;
  const maxAttempts: number = count * 100 + 1000;
  while (elements.size !== count) {
    if (++attempts > maxAttempts)
      throw new Error(
        "Unable to generate enough unique items; the element domain may be too small.",
      );
    elements.add(props.element(elements.size, count));
  }
  return Array.from(elements);
};
