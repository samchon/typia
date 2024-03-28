import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_functional_isReturn_ArrayAtomicAlias =
  _test_functional_isReturn("ArrayAtomicAlias")(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
      (input: ArrayAtomicAlias): ArrayAtomicAlias | null => {
        const result = p(input);
        return ((input: any): input is ArrayAtomicAlias => {
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
        })(result)
          ? result
          : null;
      },
  );
