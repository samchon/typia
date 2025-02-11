import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_createAssert_ClassNonPublic = _test_assert(TypeGuardError)(
    "ClassNonPublic",
)<ClassNonPublic>(
    ClassNonPublic
)(typia.createAssert<ClassNonPublic>());
