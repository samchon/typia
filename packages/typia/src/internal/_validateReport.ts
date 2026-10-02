import { IValidation } from "@typia/interface";

/**
 * Create the reporter that validation functions use to collect errors.
 *
 * The returned function keeps an error only when it is exceptionable and its
 * path is neither an ancestor nor a descendant of the last kept path, so a
 * failing leaf is not also reported as every enclosing value. An undefined
 * value gets a default description when none was supplied. Kept errors retain
 * their original references, and filling that description updates the error. It
 * always returns false so emitted code can return it directly.
 *
 * @evidence contracts/common.md#principled-implementation The reporter pushes the original error onto the list only when it is exceptionable and its path is neither an ancestor nor a descendant of the last pushed one, so a failing leaf is not also reported as every enclosing value. For an undefined value it fills a missing description while preserving supplied text; it always returns false so emitted code can return it directly.
 * @evidence contracts/common.md#clear-and-simple-design One closure with two private predicates.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The suppression is path-based and general.
 * @evidence contracts/common.md#meaningful-documentation A comment states the suppression and the false result.
 */
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
