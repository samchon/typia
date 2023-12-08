import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_validateClone_TypeTagArray = _test_misc_validateClone(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
  typia.misc.validateClone<TypeTagArray>(input),
);
