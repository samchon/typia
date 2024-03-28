import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_functional_isParameters_ArrayAtomicSimple =
  _test_functional_isParameters("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      (input: ArrayAtomicSimple): ArrayAtomicSimple | null => {
        if (
          false ===
          ((input: any): input is ArrayAtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              Array.isArray(input[0]) &&
              input[0].every((elem: any) => "boolean" === typeof elem) &&
              Array.isArray(input[1]) &&
              input[1].every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input[2]) &&
              input[2].every((elem: any) => "string" === typeof elem)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
