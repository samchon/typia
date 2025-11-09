import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectPartial = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.misc.assertPrune<ObjectPartial>(input));
