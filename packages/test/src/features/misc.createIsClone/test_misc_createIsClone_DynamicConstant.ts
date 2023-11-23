import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_createIsClone_DynamicConstant = _test_misc_isClone(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(
  typia.misc.createIsClone<DynamicConstant>(),
);
