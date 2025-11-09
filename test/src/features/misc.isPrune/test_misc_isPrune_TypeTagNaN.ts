import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_isPrune_TypeTagNaN = (): void => _test_misc_isPrune(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.misc.isPrune<TypeTagNaN>(input));
