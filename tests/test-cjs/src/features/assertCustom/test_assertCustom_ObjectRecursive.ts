import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertCustom_ObjectRecursive = (): void =>
  _test_assert(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) =>
    typia.assert<ObjectRecursive>(input, (p) => new CustomGuardError(p)),
  );
