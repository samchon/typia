import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssert_TypeTagType = _test_assert(TypeGuardError)(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.createAssert<TypeTagType>());
