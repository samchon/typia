import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertReturn_ObjectDescription =
  _test_functional_assertReturn(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertReturn(p),
  );
