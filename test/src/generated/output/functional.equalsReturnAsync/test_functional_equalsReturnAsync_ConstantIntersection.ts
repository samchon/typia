import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_functional_equalsReturnAsync_ConstantIntersection =
  _test_functional_equalsReturnAsync("ConstantIntersection")(
    ConstantIntersection,
  )(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      async (
        input: ConstantIntersection,
      ): Promise<ConstantIntersection | null> => {
        const result = await p(input);
        return ((
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
        })(result)
          ? result
          : null;
      },
  );
