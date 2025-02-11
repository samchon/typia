import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertFunction_ObjectDescription =
  _test_functional_assertFunction(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertFunction(p),
  );
