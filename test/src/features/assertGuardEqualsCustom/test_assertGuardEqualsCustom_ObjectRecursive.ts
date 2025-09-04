import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertGuardEqualsCustom_ObjectRecursive = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) =>
    typia.assertGuardEquals<ObjectRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
