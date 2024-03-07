import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagCustom = _test_assert(TypeGuardError)(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) => typia.assert<TypeTagCustom>(input));
