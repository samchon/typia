import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertEqualsCustom_ObjectRecursive = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(typia.createAssertEquals<ObjectRecursive>((p) => new CustomGuardError(p)));
