import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

export const _randomFormatUuid = (props?: _ILengthProps): string =>
  _randomFormatLength(props, () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }),
  );
