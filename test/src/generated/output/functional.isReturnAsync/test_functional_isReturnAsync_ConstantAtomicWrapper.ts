import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_functional_isReturnAsync_ConstantAtomicWrapper =
  _test_functional_isReturnAsync("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )(
    (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      async (
        input: ConstantAtomicWrapper,
      ): Promise<ConstantAtomicWrapper | null> => {
        const result = await p(input);
        return ((input: any): input is ConstantAtomicWrapper => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.value;
          const $io1 = (input: any): boolean =>
            "number" === typeof input.value && Number.isFinite(input.value);
          const $io2 = (input: any): boolean => "string" === typeof input.value;
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1]) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2])
          );
        })(result)
          ? result
          : null;
      },
  );
