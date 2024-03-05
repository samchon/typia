import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsReturn_ObjectInternal =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertEqualsReturn(p),
  );
