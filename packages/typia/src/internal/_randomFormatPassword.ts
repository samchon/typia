import { _randomString } from "./_randomString";

export const _randomFormatPassword = (): string =>
  _randomString({
    type: "string",
    minLength: 4,
    maxLength: 16,
  });
