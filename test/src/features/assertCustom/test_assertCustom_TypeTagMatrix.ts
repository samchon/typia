import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagMatrix = _test_assert(CustomGuardError)(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.assert<TypeTagMatrix>(input, (p) => new CustomGuardError(p)),
);
