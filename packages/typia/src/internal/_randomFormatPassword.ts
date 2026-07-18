import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatPassword = (props?: _ILengthProps): string =>
  _randomString(
    props?.minLength === undefined && props?.maxLength === undefined
      ? { type: "string", minLength: 4, maxLength: 16 }
      : {
          type: "string",
          minLength: props?.minLength,
          maxLength: props?.maxLength,
        },
  );
