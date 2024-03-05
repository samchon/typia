import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_equalsParameters_ToJsonArray =
  _test_functional_equalsParameters("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.equalsParameters(p),
  );
