import { OpenApi } from "@samchon/openapi";

import { $randomInteger } from "./$randomInteger";

export const $randomArray = <T>(
  props: Omit<OpenApi.IJsonSchema.IArray, "type" | "items"> & {
    element: (index: number, count: number) => T;
  },
) => {
  const count: number = $randomInteger({
    minimum: props.minItems ?? 0,
    maximum: props.maxItems ?? (props.minItems ?? 0) + 5,
  });
  if (props.uniqueItems !== true)
    return new Array(count).fill(null).map((_, i) => props.element(i, count));
  const elements: Set<any> = new Set();
  while (elements.size !== count)
    elements.add(props.element(elements.size, count));
  return Array.from(elements);
};
