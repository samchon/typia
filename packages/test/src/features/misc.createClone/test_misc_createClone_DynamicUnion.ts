import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createClone_DynamicUnion = _test_misc_clone(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.misc.createClone<DynamicUnion>());
