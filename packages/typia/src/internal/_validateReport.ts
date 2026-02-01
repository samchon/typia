import { IValidation } from "../IValidation";

export const _validateReport = (array: IValidation.IError[]) => {
  const reportable = (path: string): boolean => {
    if (array.length === 0) return true;
    const last: string = array[array.length - 1]!.path;
    return path.length > last.length || last.substring(0, path.length) !== path;
  };
  return (exceptable: boolean, error: IValidation.IError): false => {
    if (exceptable && reportable(error.path)) {
      if (error.value === undefined)
        error.description ??= [
          "The value at this path is `undefined`.",
          "",
          `Please fill the \`${error.expected}\` typed value next time.`,
        ].join("\n");
      array.push(error);
    }
    return false;
  };
};
