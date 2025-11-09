import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertEquals_ObjectSimple = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(typia.createAssertEquals<ObjectSimple>());
