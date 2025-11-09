import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectPartialAndRequired = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.misc.createAssertPrune<ObjectPartialAndRequired>());
