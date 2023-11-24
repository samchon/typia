import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_isClone_TypeTagType = _test_misc_isClone(
  "TypeTagType",
)<TypeTagType>(TypeTagType)((input) => typia.misc.isClone<TypeTagType>(input));
