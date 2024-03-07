import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagDefault = _test_assert(TypeGuardError)(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)(typia.createAssert<TypeTagDefault>());
