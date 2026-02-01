import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_prune_TypeTagInfinite = (): void => _test_misc_prune(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)((input) => typia.misc.prune<TypeTagInfinite>(input));
