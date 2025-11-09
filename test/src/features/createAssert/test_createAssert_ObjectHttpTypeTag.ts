import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectHttpTypeTag = (): void => _test_assert(TypeGuardError)(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.createAssert<ObjectHttpTypeTag>());
