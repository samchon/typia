import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_equals_DynamicComposite = _test_equals(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.equals<DynamicComposite>(input),
);
