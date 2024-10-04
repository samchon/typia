import { $randomString } from "./$randomString";

export const $randomFormatUrl = (): string =>
  `https://${random(10)}.${random(3)}`;

const random = (length: number) =>
  $randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
