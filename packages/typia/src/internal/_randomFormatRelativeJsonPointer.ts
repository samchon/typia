import { _randomInteger } from "./_randomInteger";
import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

export const _randomFormatRelativeJsonPointer = (
  props?: _ILengthProps,
): string =>
  _randomFormatLength(
    props,
    () =>
      `${_randomInteger({
        type: "integer",
        minimum: 0,
        maximum: 10,
      })}#`,
  );
