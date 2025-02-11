import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectJsonTag = _test_assertGuard(TypeGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((input) => typia.assertGuard<ObjectJsonTag>(input));
