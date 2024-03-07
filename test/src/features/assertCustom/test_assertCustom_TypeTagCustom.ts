import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagCustom = _test_assert(CustomGuardError)(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assert<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
);
