import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectDate = _test_assert(CustomGuardError)(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.createAssert<ObjectDate>((p) => new CustomGuardError(p)));
