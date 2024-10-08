import { $randomInteger } from "./$randomInteger";

export const $randomFormatRelativeJsonPointer = (): string =>
  `${$randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 10,
  })}#`;
