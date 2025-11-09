import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagTypeUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)((input) => typia.misc.assertPrune<TypeTagTypeUnion>(input, (p) => new CustomGuardError(p)));
