import type { OpenApi } from "@typia/interface";

import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_LENGTH = 5;
const DEFAULT_RANGE = 5;

/**
 * Generate a random lowercase string within the schema's length bounds.
 *
 * The default length is five to ten characters.
 *
 * @evidence contracts/common.md#principled-implementation The length is drawn between the schema's bounds with default floor five and range five and every character is a random lowercase letter, so the result satisfies length bounds and, as a letters-only string, most formats the generator does not know.
 * @evidence contracts/common.md#clear-and-simple-design One function over the integer generator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The alphabet and defaults are constants of the generator.
 * @evidence contracts/common.md#meaningful-documentation The doc states the alphabet and the default length.
 */
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
