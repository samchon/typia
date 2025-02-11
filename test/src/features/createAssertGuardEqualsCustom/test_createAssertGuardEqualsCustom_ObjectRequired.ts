import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectRequired = _test_assertGuardEquals(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.createAssertGuardEquals<ObjectRequired>((p) => new CustomGuardError(p)));
