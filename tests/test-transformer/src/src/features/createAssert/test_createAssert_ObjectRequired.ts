import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectRequired = (): void => _test_assert(TypeGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.createAssert<ObjectRequired>());
