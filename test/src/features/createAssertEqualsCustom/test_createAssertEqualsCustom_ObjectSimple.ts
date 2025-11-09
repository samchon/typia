import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertEqualsCustom_ObjectSimple = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(typia.createAssertEquals<ObjectSimple>((p) => new CustomGuardError(p)));
