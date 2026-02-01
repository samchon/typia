import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_validatePrune_ObjectPrimitive = (): void => _test_misc_validatePrune(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((input) => typia.misc.validatePrune<ObjectPrimitive>(input));
