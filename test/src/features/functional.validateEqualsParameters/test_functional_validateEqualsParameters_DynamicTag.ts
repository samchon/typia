import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateEqualsParameters_DynamicTag =
  _test_functional_validateEqualsParameters("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.validateEqualsParameters(p),
  );
