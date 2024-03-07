import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectPrimitive =
  _test_assertGuardEquals(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    typia.assertGuardEquals<ObjectPrimitive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
