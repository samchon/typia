import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_assertClone_TypeTagLength = _test_misc_assertClone(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.misc.assertClone<TypeTagLength>(input),
);
