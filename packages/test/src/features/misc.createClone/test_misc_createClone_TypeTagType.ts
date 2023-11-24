import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createClone_TypeTagType = _test_misc_clone(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.misc.createClone<TypeTagType>());
