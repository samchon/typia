import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_isParameters_ToJsonUnion =
  _test_functional_isParameters("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.isParameters(p),
  );
