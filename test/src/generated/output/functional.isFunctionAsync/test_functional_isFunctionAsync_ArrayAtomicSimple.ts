import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_functional_isFunctionAsync_ArrayAtomicSimple =
  _test_functional_isFunctionAsync("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      async (input: ArrayAtomicSimple): Promise<ArrayAtomicSimple | null> => {
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
