import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_isParameters_DynamicConstant = (): void =>
  _test_functional_isParameters("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.isParameters(p),
  );
