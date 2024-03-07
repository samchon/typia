import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagTypeUnion = _test_assert(TypeGuardError)(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)(typia.createAssert<TypeTagTypeUnion>());
