import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_equalsReturn_ConstantIntersection = (): void =>
  _test_functional_equalsReturn("ConstantIntersection")(ConstantIntersection)(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      typia.functional.equalsReturn(p),
  );
