import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_validateClone_DynamicNever = _test_misc_validateClone(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) =>
  typia.misc.validateClone<DynamicNever>(input),
);
