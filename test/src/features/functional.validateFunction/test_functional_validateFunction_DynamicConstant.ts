import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateFunction_DynamicConstant = (): void =>
  _test_functional_validateFunction("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.validateFunction(p),
  );
