import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_misc_createIsPrune_TypeTagTypeUnion = (): void => _test_misc_isPrune(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)(typia.misc.createIsPrune<TypeTagTypeUnion>());
