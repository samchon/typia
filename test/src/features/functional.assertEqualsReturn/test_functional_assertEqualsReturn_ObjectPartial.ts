import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsReturn_ObjectPartial =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertEqualsReturn(p),
  );
