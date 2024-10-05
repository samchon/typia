import { $randomString } from "./$randomString";

export const $randomFormatPassword = (): string =>
  $randomString({
    type: "string",
    minLength: 4,
    maxLength: 16,
  });
