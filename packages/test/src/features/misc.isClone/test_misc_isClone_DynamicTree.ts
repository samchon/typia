import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_isClone_DynamicTree = _test_misc_isClone(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) => typia.misc.isClone<DynamicTree>(input));
