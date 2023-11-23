import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_validateClone_DynamicTree = _test_misc_validateClone(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) =>
  typia.misc.validateClone<DynamicTree>(input),
);
