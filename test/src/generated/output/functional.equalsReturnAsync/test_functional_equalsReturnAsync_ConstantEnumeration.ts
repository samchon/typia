import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_functional_equalsReturnAsync_ConstantEnumeration =
  _test_functional_equalsReturnAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      async (
        input: ConstantEnumeration,
      ): Promise<ConstantEnumeration | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ConstantEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
