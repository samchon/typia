import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectPartial = _test_assert(CustomGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createAssert<ObjectPartial>((p) => new CustomGuardError(p)));
