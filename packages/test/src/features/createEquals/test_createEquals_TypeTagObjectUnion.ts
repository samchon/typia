import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createEquals_TypeTagObjectUnion = _test_equals(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
  typia.createEquals<TypeTagObjectUnion>(),
);
