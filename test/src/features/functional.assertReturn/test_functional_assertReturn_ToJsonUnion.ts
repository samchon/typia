import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertReturn_ToJsonUnion =
  _test_functional_assertReturn(TypeGuardError)("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.assertReturn(p),
  );
