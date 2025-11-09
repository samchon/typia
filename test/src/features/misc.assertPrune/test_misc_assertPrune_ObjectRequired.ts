import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectRequired = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.misc.assertPrune<ObjectRequired>(input));
