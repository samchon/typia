import { $randomInteger } from "./$randomInteger";

export const $randomFormatIpv4 = (): string =>
  new Array(4).fill(0).map(random).join(".");

const random = () =>
  $randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 255,
  });
