import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createAssertClone_TypeTagType = _test_misc_assertClone(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.misc.createAssertClone<TypeTagType>());
