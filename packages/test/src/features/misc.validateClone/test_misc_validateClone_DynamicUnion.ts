import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_validateClone_DynamicUnion = _test_misc_validateClone(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  typia.misc.validateClone<DynamicUnion>(input),
);
