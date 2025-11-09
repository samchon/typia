import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createValidatePrune_ObjectGeneric = (): void => _test_misc_validatePrune(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.misc.createValidatePrune<ObjectGeneric>());
