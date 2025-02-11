import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectPartial = _test_assertGuard(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createAssertGuard<ObjectPartial>((p) => new CustomGuardError(p)));
