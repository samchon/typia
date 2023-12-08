import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_prune_DynamicComposite = _test_misc_prune(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.misc.prune<DynamicComposite>(input),
);
