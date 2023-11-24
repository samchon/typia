import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createAssert_TypeTagTypeUnion = _test_assert(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)(typia.createAssert<TypeTagTypeUnion>());
