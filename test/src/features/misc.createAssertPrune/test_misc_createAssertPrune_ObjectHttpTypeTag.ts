import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectHttpTypeTag = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.misc.createAssertPrune<ObjectHttpTypeTag>());
