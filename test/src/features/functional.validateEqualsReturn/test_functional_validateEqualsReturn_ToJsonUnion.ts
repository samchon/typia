import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateEqualsReturn_ToJsonUnion =
  _test_functional_validateEqualsReturn("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.validateEqualsReturn(p),
  );
