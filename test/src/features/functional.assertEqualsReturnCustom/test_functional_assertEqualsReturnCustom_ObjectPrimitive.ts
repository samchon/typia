import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertEqualsReturnCustom_ObjectPrimitive =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
