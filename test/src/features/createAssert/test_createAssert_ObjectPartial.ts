import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectPartial = _test_assert(TypeGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createAssert<ObjectPartial>());
