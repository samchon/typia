import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_validatePrune_ObjectPartial = (): void => _test_misc_validatePrune(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.misc.validatePrune<ObjectPartial>(input));
