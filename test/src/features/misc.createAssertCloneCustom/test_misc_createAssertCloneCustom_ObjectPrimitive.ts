import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createAssertCloneCustom_ObjectPrimitive =
  _test_misc_assertClone(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(
    typia.misc.createAssertClone<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
  );
