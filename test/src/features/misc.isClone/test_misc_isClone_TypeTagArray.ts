import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_isClone_TypeTagArray = _test_misc_isClone(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
  typia.misc.isClone<TypeTagArray>(input),
);
