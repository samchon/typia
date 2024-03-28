import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsReturn_ToJsonUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => ToJsonUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
