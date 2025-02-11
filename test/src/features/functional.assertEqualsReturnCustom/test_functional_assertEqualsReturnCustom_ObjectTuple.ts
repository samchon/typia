import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertEqualsReturnCustom_ObjectTuple =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => ObjectTuple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
