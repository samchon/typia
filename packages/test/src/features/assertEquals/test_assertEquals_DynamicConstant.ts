import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertEquals_DynamicConstant = _test_assertEquals(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  typia.assertEquals<DynamicConstant>(input),
);
