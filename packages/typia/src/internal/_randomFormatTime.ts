import { _randomInteger } from "./_randomInteger";

export const _randomFormatTime = (): string =>
  new Date(
    _randomInteger({
      type: "integer",
      minimum: 0,
      maximum: DAY,
    }),
  )
    .toISOString()
    .substring(11);

const DAY = 86_400_000;
