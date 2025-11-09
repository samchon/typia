import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createValidatePrune_ObjectNullable = (): void => _test_misc_validatePrune(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.misc.createValidatePrune<ObjectNullable>());
