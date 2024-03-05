import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertFunction_ObjectDate =
  _test_functional_assertFunction(TypeGuardError)("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) =>
      typia.functional.assertFunction(p),
  );
