import { OpenApi } from "@samchon/openapi";

import { $randomInteger } from "./$randomInteger";

export const $randomString = (props: OpenApi.IJsonSchema.IString) => {
  const length: number = $randomInteger({
    type: "integer",
    minimum: props.minLength ?? 0,
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
    type: "integer",
    minimum: 0,
    maximum: ALPHABETS.length - 1,
  });
