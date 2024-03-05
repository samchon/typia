import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertFunction_ObjectTuple =
  _test_functional_assertFunction(TypeGuardError)("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.assertFunction(p),
  );
