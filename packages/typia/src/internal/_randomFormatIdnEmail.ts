import { _randomFormatEmail } from "./_randomFormatEmail";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatIdnEmail = (props?: _ILengthProps): string =>
  _randomFormatEmail(props);
