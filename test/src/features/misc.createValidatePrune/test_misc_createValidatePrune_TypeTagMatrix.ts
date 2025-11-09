import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_createValidatePrune_TypeTagMatrix = (): void => _test_misc_validatePrune(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.misc.createValidatePrune<TypeTagMatrix>());
