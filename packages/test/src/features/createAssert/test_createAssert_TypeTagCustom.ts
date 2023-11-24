import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssert_TypeTagCustom = _test_assert(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.createAssert<TypeTagCustom>());
