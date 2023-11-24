import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_isClone_DynamicNever = _test_misc_isClone(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) =>
  typia.misc.isClone<DynamicNever>(input),
);
