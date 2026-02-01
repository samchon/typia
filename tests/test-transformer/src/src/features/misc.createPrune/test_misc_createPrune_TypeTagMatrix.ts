import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_createPrune_TypeTagMatrix = (): void => _test_misc_prune(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)(typia.misc.createPrune<TypeTagMatrix>());
