import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertGuardEqualsCustom_ObjectPrimitive =
  _test_assertGuardEquals(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    typia.assertGuardEquals<ObjectPrimitive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
