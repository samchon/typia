import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectJsonTag = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((input) => typia.misc.assertPrune<ObjectJsonTag>(input));
