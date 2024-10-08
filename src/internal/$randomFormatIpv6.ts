import { $randomInteger } from "./$randomInteger";

export const $randomFormatIpv6 = (): string =>
  new Array(8).fill(0).map(random).join(":");

const random = () =>
  $randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 65_535,
  }).toString(16);
