import { OpenApi } from "@samchon/openapi";

import { $randomInteger } from "./$randomInteger";

export const $randomString = (
  props: Omit<OpenApi.IJsonSchema.IString, "format">,
) => {
  const length: number = $randomInteger({
    minimum: props.minLength,
    maximum: props.maxLength,
  });
  return new Array(length)
    .fill(0)
    .map(() => ALPHABETS[random()])
    .join("");
};

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

const random = () =>
  $randomInteger({
    minimum: 0,
    maximum: ALPHABETS.length - 1,
  });
