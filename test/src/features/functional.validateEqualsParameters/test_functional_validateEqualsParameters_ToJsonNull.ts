import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateEqualsParameters_ToJsonNull =
  _test_functional_validateEqualsParameters("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.validateEqualsParameters(p),
  );
