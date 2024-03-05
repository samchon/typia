import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertReturn_ObjectDate =
  _test_functional_assertReturn(TypeGuardError)("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) => typia.functional.assertReturn(p),
  );
