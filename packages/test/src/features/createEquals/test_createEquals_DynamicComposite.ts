import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createEquals_DynamicComposite = _test_equals(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(typia.createEquals<DynamicComposite>());
