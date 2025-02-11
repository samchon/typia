import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertCustom_TypeTagTuple = _test_assert(CustomGuardError)(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.assert<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
);
