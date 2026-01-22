import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertGuardEqualsCustom_ObjectPrimitive = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(
    typia.createAssertGuardEquals<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
  );
