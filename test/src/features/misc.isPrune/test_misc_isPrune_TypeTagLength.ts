import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_isPrune_TypeTagLength = (): void => _test_misc_isPrune(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.misc.isPrune<TypeTagLength>(input));
