import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_functional_isParametersAsync_ConstantAtomicSimple =
  _test_functional_isParametersAsync("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )(
    (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      async (
        input: ConstantAtomicSimple,
      ): Promise<ConstantAtomicSimple | null> => {
        if (
          false ===
          ((input: any): input is ConstantAtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 4 &&
              false === input[0] &&
              true === input[1] &&
              2 === input[2] &&
              "three" === input[3]
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
