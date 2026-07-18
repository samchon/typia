import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

export const _randomFormatRegex = (props?: _ILengthProps): string =>
  _randomFormatLength(props, () => FIXED);

const FIXED =
  "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/";
