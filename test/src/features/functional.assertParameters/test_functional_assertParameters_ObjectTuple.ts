import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertParameters_ObjectTuple =
  _test_functional_assertParameters(TypeGuardError)("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.assertParameters(p),
  );
