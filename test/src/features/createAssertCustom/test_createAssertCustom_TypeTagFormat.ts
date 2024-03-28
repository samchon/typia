import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssertCustom_TypeTagFormat = _test_assert(
  CustomGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
  typia.createAssert<TypeTagFormat>((p) => new CustomGuardError(p)),
);
