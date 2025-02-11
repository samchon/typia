import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsParameters_ObjectTuple =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => ObjectTuple) =>
    typia.functional.assertEqualsParameters(p),
  );
