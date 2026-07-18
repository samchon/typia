import { _randomFormatHostname } from "./_randomFormatHostname";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatIdnHostname = (props?: _ILengthProps): string =>
  _randomFormatHostname(props);
