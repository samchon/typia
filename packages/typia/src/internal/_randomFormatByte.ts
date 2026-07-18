import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

export const _randomFormatByte = (props?: _ILengthProps): string =>
  _randomFormatLength(props, () => FIXED);

const FIXED = "vt7ekz4lIoNTTS9sDQYdWKharxIFAR54+z/umIxSgUM=";
