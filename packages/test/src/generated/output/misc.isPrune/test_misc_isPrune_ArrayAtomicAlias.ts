import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_misc_isPrune_ArrayAtomicAlias = _test_misc_isPrune(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  ((input: any): input is ArrayAtomicAlias => {
    const is = (input: any): input is ArrayAtomicAlias => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        Array.isArray(input[0]) &&
        input[0].every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input[1]) &&
        input[1].every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input[2]) &&
        input[2].every((elem: any) => "string" === typeof elem)
      );
    };
    const prune = (input: ArrayAtomicAlias): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
