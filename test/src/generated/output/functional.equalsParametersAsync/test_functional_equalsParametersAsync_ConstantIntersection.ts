import typia from "typia";
import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
export const test_functional_equalsParametersAsync_ConstantIntersection =
  _test_functional_equalsParametersAsync("ConstantIntersection")(
    ConstantIntersection,
  )(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      async (
        input: ConstantIntersection,
      ): Promise<ConstantIntersection | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantIntersection => {
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
        return p(input);
      },
  );
