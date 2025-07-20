import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_assertCloneCustom_ObjectRecursive = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) =>
    typia.misc.assertClone<ObjectRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
