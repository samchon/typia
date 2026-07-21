import { _randomString } from "./_randomString";
import {
  _ILengthProps,
  _randomLengthPick,
  _randomLengthWindow,
  _randomSegmentLength,
} from "./_randomStringLength";

export const _randomFormatJsonPointer = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${PREFIX}${random()}`;
  // The `/components/schemas/` prefix (20 chars) is fixed; the reference token
  // after it grows or shrinks to hit the requested length.
  if (props.maxLength === undefined || props.maxLength >= PREFIX.length)
    return `${PREFIX}${_randomSegmentLength(props, PREFIX.length, 10, 0)}`;
  // Below that prefix a pointer still exists: the empty pointer addresses the
  // whole document, and one `/`-prefixed token addresses a member of it.
  const length: number = _randomLengthPick(
    _randomLengthWindow(props, { minimum: 0, spread: 6 }),
  );
  return length === 0
    ? ""
    : `/${_randomString({
        type: "string",
        minLength: length - 1,
        maxLength: length - 1,
      })}`;
};

const PREFIX = "/components/schemas/";

const random = () =>
  _randomString({ type: "string", minLength: 10, maxLength: 10 });
