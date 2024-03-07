import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_functional_isFunctionAsync_ConstantAtomicSimple =
  _test_functional_isFunctionAsync("ConstantAtomicSimple")(
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
        const result = await p(input);
        return ((input: any): input is ConstantAtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 4 &&
            false === input[0] &&
            true === input[1] &&
            2 === input[2] &&
            "three" === input[3]
          );
        })(result)
          ? result
          : null;
      },
  );
