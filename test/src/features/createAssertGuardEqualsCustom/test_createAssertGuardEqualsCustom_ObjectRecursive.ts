import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertGuardEqualsCustom_ObjectRecursive = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(
    typia.createAssertGuardEquals<ObjectRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
