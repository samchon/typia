import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createEquals_TypeTagInfinite = _test_equals(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.createEquals<TypeTagInfinite>());
