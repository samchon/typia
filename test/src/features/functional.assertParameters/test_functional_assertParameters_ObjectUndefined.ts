import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertParameters_ObjectUndefined =
  _test_functional_assertParameters(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertParameters(p),
  );
