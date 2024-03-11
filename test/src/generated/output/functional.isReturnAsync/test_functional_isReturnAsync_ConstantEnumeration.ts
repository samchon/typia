import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_functional_isReturnAsync_ConstantEnumeration =
  _test_functional_isReturnAsync("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      async (
        input: ConstantEnumeration,
      ): Promise<ConstantEnumeration | null> => {
        const result = await p(input);
        return ((input: any): input is ConstantEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Four" === elem ||
                "Three" === elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
