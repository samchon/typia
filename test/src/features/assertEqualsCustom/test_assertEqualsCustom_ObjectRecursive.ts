import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertEqualsCustom_ObjectRecursive = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) =>
    typia.assertEquals<ObjectRecursive>(input, (p) => new CustomGuardError(p)),
  );
