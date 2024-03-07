import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagMatrix = _test_assert(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
  typia.createAssert<TypeTagMatrix>((p) => new CustomGuardError(p)),
);
