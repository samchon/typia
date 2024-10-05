import { IValidation } from "../IValidation";

export const $validateReport =
  (array: IValidation.IError[]) =>
  (props: {
    path: string;
    exceptable: boolean;
    error: IValidation.IError;
  }): false => {
    if (props.exceptable && reportable(array, props.error.path))
      array.push(props.error);
    return false;
  };

const reportable = (array: IValidation.IError[], path: string): boolean => {
  if (array.length === 0) return true;
  const last: string = array[array.length - 1]!.path;
  return path.length > last.length || last.substring(0, path.length) !== path;
};
