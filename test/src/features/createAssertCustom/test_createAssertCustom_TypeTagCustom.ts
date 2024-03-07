import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagCustom = _test_assert(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
  typia.createAssert<TypeTagCustom>((p) => new CustomGuardError(p)),
);
