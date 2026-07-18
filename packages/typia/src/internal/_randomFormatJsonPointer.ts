import { _randomString } from "./_randomString";
import { _ILengthProps, _randomSegmentLength } from "./_randomStringLength";

export const _randomFormatJsonPointer = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `/components/schemas/${random()}`;
  // The `/components/schemas/` prefix (20 chars) is fixed; the reference token
  // after it grows or shrinks to hit the requested length.
  return `/components/schemas/${_randomSegmentLength(props, 20, 10, 0)}`;
};

const random = () =>
  _randomString({ type: "string", minLength: 10, maxLength: 10 });
