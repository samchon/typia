import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertEqualsCustom_ObjectNullable = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(typia.createAssertEquals<ObjectNullable>((p) => new CustomGuardError(p)));
