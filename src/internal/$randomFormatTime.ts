import { $randomInteger } from "./$randomInteger";

export const $randomFormatTime = (): string =>
  new Date(
    $randomInteger({
      type: "integer",
      minimum: 0,
      maximum: DAY,
    }),
  )
    .toISOString()
    .substring(11, 23);

const DAY = 86_400_000;
