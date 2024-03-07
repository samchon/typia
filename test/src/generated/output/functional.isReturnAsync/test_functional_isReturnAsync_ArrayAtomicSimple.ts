import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_functional_isReturnAsync_ArrayAtomicSimple =
  _test_functional_isReturnAsync("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      async (input: ArrayAtomicSimple): Promise<ArrayAtomicSimple | null> => {
        const result = await p(input);
        return ((input: any): input is ArrayAtomicSimple => {
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
