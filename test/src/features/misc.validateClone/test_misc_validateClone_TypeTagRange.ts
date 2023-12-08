import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_validateClone_TypeTagRange = _test_misc_validateClone(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
  typia.misc.validateClone<TypeTagRange>(input),
);
