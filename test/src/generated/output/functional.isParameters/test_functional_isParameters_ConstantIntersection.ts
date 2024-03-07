import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
export const test_functional_isParameters_ConstantIntersection =
  _test_functional_isParameters("ConstantIntersection")(ConstantIntersection)(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      (input: ConstantIntersection): ConstantIntersection | null => {
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
        return p(input);
      },
  );
