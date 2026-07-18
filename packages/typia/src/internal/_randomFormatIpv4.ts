import { _randomInteger } from "./_randomInteger";
import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

export const _randomFormatIpv4 = (props?: _ILengthProps): string =>
  _randomFormatLength(props, () => new Array(4).fill(0).map(random).join("."));

const random = () =>
  _randomInteger({
    type: "integer",
    minimum: 0,
    maximum: 255,
  });
