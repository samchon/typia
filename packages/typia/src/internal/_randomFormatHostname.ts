import { _randomString } from "./_randomString";

export const _randomFormatHostname = (): string => `${random(10)}.${random(3)}`;

const random = (length: number) =>
  _randomString({ type: "string", minLength: length, maxLength: length });
