import { $randomString } from "./$randomString";

export const $randomFormatRelativeJsonPointer = (): string =>
  `${$randomString({
    type: "string",
    minLength: 3,
    maxLength: 10,
  })}#`;
