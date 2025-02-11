import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_assert_ObjectHttpTypeTag = _test_assert(TypeGuardError)(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.assert<ObjectHttpTypeTag>(input));
