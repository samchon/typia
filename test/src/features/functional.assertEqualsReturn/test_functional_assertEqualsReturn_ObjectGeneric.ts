import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsReturn_ObjectGeneric =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertEqualsReturn(p),
  );
