import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertFunction_ObjectUndefined =
  _test_functional_assertFunction(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertFunction(p),
  );
