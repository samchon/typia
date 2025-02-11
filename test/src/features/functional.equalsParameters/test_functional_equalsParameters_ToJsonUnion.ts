import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_equalsParameters_ToJsonUnion =
  _test_functional_equalsParameters("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.equalsParameters(p),
  );
