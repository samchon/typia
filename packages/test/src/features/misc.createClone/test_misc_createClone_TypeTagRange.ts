import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_createClone_TypeTagRange = _test_misc_clone(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.misc.createClone<TypeTagRange>());
