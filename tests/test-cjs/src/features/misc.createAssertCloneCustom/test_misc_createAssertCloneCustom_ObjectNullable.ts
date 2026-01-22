import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createAssertCloneCustom_ObjectNullable = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(
    typia.misc.createAssertClone<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
