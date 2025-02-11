import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectRequired = _test_assertGuard(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.createAssertGuard<ObjectRequired>((p) => new CustomGuardError(p)));
