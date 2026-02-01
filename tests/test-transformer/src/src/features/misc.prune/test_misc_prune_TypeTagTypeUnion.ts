import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_misc_prune_TypeTagTypeUnion = (): void => _test_misc_prune(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)((input) => typia.misc.prune<TypeTagTypeUnion>(input));
