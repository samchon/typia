import { _randomString } from "./_randomString";

export const _randomFormatJsonPointer = (): string =>
  `/components/schemas/${random()}`;

const random = () =>
  _randomString({ type: "string", minLength: 10, maxLength: 10 });
