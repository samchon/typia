import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertEquals_DynamicUnion = _test_assertEquals(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  typia.assertEquals<DynamicUnion>(input),
);
