import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
export const test_functional_isReturnAsync_ConstantConstEnumeration =
  _test_functional_isReturnAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
        p: (
          input: ConstantConstEnumeration,
        ) => Promise<ConstantConstEnumeration>,
      ) =>
      async (
        input: ConstantConstEnumeration,
      ): Promise<ConstantConstEnumeration | null> => {
        const result = await p(input);
        return ((input: any): input is ConstantConstEnumeration => {
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
