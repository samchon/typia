import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectGenericArray = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.misc.createAssertPrune<ObjectGenericArray>());
