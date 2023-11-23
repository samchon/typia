import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_assertClone_TypeTagFormat = _test_misc_assertClone(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.misc.assertClone<TypeTagFormat>(input),
);
