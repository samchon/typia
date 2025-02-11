import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDate } from "../../structures/ObjectDate";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectDate = _test_assert(TypeGuardError)(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.createAssert<ObjectDate>());
