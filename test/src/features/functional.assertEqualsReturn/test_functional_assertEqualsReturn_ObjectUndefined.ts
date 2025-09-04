import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsReturn_ObjectUndefined = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertEqualsReturn(p),
  );
