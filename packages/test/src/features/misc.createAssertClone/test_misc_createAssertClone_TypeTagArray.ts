import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createAssertClone_TypeTagArray = _test_misc_assertClone(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.misc.createAssertClone<TypeTagArray>());
