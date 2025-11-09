import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_createValidatePrune_TypeTagArrayUnion = (): void => _test_misc_validatePrune(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)(typia.misc.createValidatePrune<TypeTagArrayUnion>());
