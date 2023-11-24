import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertGuard_TypeTagMatrix = _test_assertGuard(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.createAssertGuard<TypeTagMatrix>());
