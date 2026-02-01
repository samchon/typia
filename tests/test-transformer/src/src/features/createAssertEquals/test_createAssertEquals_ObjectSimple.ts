import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectSimple = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.createAssertEquals<ObjectSimple>());
