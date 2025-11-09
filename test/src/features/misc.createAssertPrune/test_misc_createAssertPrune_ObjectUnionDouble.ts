import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectUnionDouble = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.misc.createAssertPrune<ObjectUnionDouble>());
