import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectInternal = (): void => _test_assert(TypeGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.createAssert<ObjectInternal>());
