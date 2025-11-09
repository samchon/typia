import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_validatePrune_ObjectPartialAndRequired = (): void => _test_misc_validatePrune(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.misc.validatePrune<ObjectPartialAndRequired>(input));
