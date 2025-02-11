import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertParameters_ObjectDate =
  _test_functional_assertParameters(TypeGuardError)("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) =>
      typia.functional.assertParameters(p),
  );
