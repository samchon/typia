import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertEquals_DynamicComposite = _test_assertEquals(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
  typia.createAssertEquals<DynamicComposite>(),
);
