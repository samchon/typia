import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagTuple = _test_assert(
  CustomGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
  typia.createAssert<TypeTagTuple>((p) => new CustomGuardError(p)),
);
