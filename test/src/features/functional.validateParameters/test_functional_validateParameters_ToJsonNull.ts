import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateParameters_ToJsonNull =
  _test_functional_validateParameters("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.validateParameters(p),
  );
