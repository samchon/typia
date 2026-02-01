import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createPrune_TypeTagPattern = (): void => _test_misc_prune(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.misc.createPrune<TypeTagPattern>());
