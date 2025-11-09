import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_isPrune_TypeTagArrayUnion = (): void => _test_misc_isPrune(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.misc.isPrune<TypeTagArrayUnion>(input));
