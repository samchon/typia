import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_createValidatePrune_ObjectHttpNullable = (): void => _test_misc_validatePrune(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)(typia.misc.createValidatePrune<ObjectHttpNullable>());
