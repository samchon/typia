import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectSimple = _test_assertGuardEquals(CustomGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.createAssertGuardEquals<ObjectSimple>((p) => new CustomGuardError(p)));
