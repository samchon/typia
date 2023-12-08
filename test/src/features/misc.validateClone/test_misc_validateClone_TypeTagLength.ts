import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_validateClone_TypeTagLength = _test_misc_validateClone(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.misc.validateClone<TypeTagLength>(input),
);
