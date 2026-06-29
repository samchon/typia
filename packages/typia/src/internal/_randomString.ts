import { OpenApi } from "@typia/interface";

import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_LENGTH = 5;
const DEFAULT_RANGE = 5;

export const _randomString = (props: OpenApi.IJsonSchema.IString) => {
  const minimum: number =
    props.minLength ??
    Math.min(props.maxLength ?? DEFAULT_MIN_LENGTH, DEFAULT_MIN_LENGTH);
  const length: number = _randomInteger({
    type: "integer",
    minimum,
    maximum: props.maxLength ?? minimum + DEFAULT_RANGE,
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
