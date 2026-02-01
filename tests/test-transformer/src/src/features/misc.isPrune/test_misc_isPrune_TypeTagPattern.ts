import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_isPrune_TypeTagPattern = (): void => _test_misc_isPrune(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.misc.isPrune<TypeTagPattern>(input));
