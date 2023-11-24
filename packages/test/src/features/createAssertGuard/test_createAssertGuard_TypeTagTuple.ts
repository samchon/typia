import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertGuard_TypeTagTuple = _test_assertGuard(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.createAssertGuard<TypeTagTuple>());
