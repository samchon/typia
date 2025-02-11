import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagObjectUnion = _test_assert(CustomGuardError)(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)(typia.createAssert<TypeTagObjectUnion>((p) => new CustomGuardError(p)));
