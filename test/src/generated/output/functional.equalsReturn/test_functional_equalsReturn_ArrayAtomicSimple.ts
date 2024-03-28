import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_functional_equalsReturn_ArrayAtomicSimple =
  _test_functional_equalsReturn("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      (input: ArrayAtomicSimple): ArrayAtomicSimple | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ArrayAtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            Array.isArray(input[0]) &&
            input[0].every(
              (elem: any, _index1: number) => "boolean" === typeof elem,
            ) &&
            Array.isArray(input[1]) &&
            input[1].every(
              (elem: any, _index2: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every(
              (elem: any, _index3: number) => "string" === typeof elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
