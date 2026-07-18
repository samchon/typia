import { _randomInteger } from "./_randomInteger";
import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

export const _randomFormatTime = (props?: _ILengthProps): string =>
  _randomFormatLength(props, () =>
    new Date(
      _randomInteger({
        type: "integer",
        minimum: 0,
        maximum: DAY,
      }),
    )
      .toISOString()
      .substring(11),
  );

const DAY = 86_400_000;
