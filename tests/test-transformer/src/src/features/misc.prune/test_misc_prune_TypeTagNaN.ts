import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_prune_TypeTagNaN = (): void => _test_misc_prune(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.misc.prune<TypeTagNaN>(input));
