import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assertEquals_TypeTagInfinite = _test_assertEquals(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)((input) =>
  typia.assertEquals<TypeTagInfinite>(input),
);
