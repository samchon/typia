import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_isParameters_DynamicNever =
  _test_functional_isParameters("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => DynamicNever) =>
      typia.functional.isParameters(p),
  );
