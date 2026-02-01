import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_prune_TypeTagRange = (): void => _test_misc_prune(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.misc.prune<TypeTagRange>(input));
