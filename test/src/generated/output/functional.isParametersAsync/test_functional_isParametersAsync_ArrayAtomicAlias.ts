import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
export const test_functional_isParametersAsync_ArrayAtomicAlias =
  _test_functional_isParametersAsync("ArrayAtomicAlias")(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      async (input: ArrayAtomicAlias): Promise<ArrayAtomicAlias | null> => {
        if (
          false ===
          ((input: any): input is ArrayAtomicAlias => {
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
