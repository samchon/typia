import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_validatePrune_ObjectUndefined = (): void => _test_misc_validatePrune(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.misc.validatePrune<ObjectUndefined>(input));
