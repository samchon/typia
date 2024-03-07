import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
export const test_functional_isFunctionAsync_ConstantIntersection =
  _test_functional_isFunctionAsync("ConstantIntersection")(
    ConstantIntersection,
  )(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      async (
        input: ConstantIntersection,
      ): Promise<ConstantIntersection | null> => {
        if (
          false ===
          ((input: any): input is ConstantIntersection => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              false === input[0] &&
              1 === input[1] &&
              "two" === input[2]
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ConstantIntersection => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            false === input[0] &&
            1 === input[1] &&
            "two" === input[2]
          );
        })(result)
          ? result
          : null;
      },
  );
