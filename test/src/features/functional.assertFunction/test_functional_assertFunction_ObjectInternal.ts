import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertFunction_ObjectInternal =
  _test_functional_assertFunction(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertFunction(p),
  );
