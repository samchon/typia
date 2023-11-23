import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_isClone_TypeTagMatrix = _test_misc_isClone(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.misc.isClone<TypeTagMatrix>(input),
);
