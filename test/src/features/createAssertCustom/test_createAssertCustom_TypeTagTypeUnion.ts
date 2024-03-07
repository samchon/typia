import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagTypeUnion = _test_assert(
  CustomGuardError,
)("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)(
  typia.createAssert<TypeTagTypeUnion>((p) => new CustomGuardError(p)),
);
