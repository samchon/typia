import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsReturn_ObjectDescription =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertEqualsReturn(p),
  );
