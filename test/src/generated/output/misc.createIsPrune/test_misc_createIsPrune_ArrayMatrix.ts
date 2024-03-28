import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_createIsPrune_ArrayMatrix = _test_misc_isPrune(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input: any): input is ArrayMatrix => {
  const is = (input: any): input is ArrayMatrix => {
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) =>
          Array.isArray(elem) &&
          elem.every(
            (elem: any) =>
              Array.isArray(elem) &&
              elem.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ),
          ),
      )
    );
  };
  const prune = (input: ArrayMatrix): void => {};
  if (!is(input)) return false;
  prune(input);
  return true;
});
