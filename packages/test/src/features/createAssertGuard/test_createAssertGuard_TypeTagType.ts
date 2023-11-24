import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertGuard_TypeTagType = _test_assertGuard(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.createAssertGuard<TypeTagType>());
