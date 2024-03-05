import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateParameters_ToJsonArray =
  _test_functional_validateParameters("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.validateParameters(p),
  );
