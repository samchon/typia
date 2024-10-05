import { $randomString } from "./$randomString";

export const $randomFormatJsonPointer = (): string =>
  `/components/schemas/${random()}`;

const random = () =>
  $randomString({ type: "string", minLength: 10, maxLength: 10 });
