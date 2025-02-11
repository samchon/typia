import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_equals_TypeTagInfinite = _test_equals(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.equals<TypeTagInfinite>(input),
);
