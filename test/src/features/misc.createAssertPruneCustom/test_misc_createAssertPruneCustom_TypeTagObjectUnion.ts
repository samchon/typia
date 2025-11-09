import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagObjectUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.misc.createAssertPrune<TypeTagObjectUnion>((p) => new CustomGuardError(p)));
