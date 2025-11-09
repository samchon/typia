import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createAssertCloneCustom_ObjectRecursive = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(
    typia.misc.createAssertClone<ObjectRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
