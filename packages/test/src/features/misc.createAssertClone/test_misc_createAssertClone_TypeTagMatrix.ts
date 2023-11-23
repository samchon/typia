import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_createAssertClone_TypeTagMatrix = _test_misc_assertClone(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.misc.createAssertClone<TypeTagMatrix>());
