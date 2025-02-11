import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssert_TypeTagMatrix = _test_assert(TypeGuardError)(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.createAssert<TypeTagMatrix>());
