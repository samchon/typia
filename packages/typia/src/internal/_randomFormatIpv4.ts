import { _randomInteger } from "./_randomInteger";

export const _randomFormatIpv4 = (): string =>
  new Array(4).fill(0).map(random).join(".");

const random = () =>
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 255,
  });
