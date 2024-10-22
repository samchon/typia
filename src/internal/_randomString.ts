import { OpenApi } from "@samchon/openapi";

import { _randomInteger } from "./_randomInteger";

export const _randomString = (props: OpenApi.IJsonSchema.IString) => {
  const length: number = _randomInteger({
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
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: ALPHABETS.length - 1,
  });
