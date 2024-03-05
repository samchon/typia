import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsFunctionCustom_ObjectTuple =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => ObjectTuple) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
