import { _randomInteger } from "./_randomInteger";

export const _randomFormatRelativeJsonPointer = (): string =>
  `${_randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 10,
  })}#`;
