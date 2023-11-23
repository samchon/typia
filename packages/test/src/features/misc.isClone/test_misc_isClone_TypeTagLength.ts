import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_isClone_TypeTagLength = _test_misc_isClone(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.misc.isClone<TypeTagLength>(input),
);
