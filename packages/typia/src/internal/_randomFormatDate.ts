import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";
import { __IEpochProps, __randomEpoch } from "./private/__randomEpoch";

export const _randomFormatDate = (props?: __IEpochProps & _ILengthProps) =>
  _randomFormatLength(props, () =>
    new Date(__randomEpoch(props)).toISOString().substring(0, 10),
  );
