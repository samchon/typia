import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertEquals_ObjectRequired = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.createAssertEquals<ObjectRequired>());
