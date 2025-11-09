import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createValidatePrune_TypeTagType = (): void => _test_misc_validatePrune(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.misc.createValidatePrune<TypeTagType>());
