import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateParameters_ToJsonUnion =
  _test_functional_validateParameters("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.validateParameters(p),
  );
