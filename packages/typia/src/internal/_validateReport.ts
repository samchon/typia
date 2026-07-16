import { IValidation } from "@typia/interface";

export const _validateReport = (array: IValidation.IError[]) => {
  const isAncestor = (ancestor: string, descendant: string): boolean =>
    descendant === ancestor ||
    descendant.startsWith(`${ancestor}.`) ||
    descendant.startsWith(`${ancestor}[`);
  const reportable = (path: string): boolean => {
    if (array.length === 0) return true;
    const last: string = array[array.length - 1]!.path;
    return isAncestor(path, last) === false && isAncestor(last, path) === false;
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
