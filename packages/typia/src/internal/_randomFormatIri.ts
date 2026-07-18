import { _randomFormatUrl } from "./_randomFormatUrl";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatIri = (props?: _ILengthProps): string =>
  _randomFormatUrl(props);
