import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsReturn_ObjectSimple = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertEqualsReturn(p),
  );
