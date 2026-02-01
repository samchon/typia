import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_isPrune_TypeTagDefault = (): void => _test_misc_isPrune(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.misc.isPrune<TypeTagDefault>(input));
