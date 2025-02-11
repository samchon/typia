import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsFunction_ObjectDescription =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertEqualsFunction(p),
  );
