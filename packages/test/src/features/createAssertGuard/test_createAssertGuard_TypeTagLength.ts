import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertGuard_TypeTagLength = _test_assertGuard(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.createAssertGuard<TypeTagLength>());
