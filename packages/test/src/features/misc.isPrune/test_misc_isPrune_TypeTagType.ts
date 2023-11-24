import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_isPrune_TypeTagType = _test_misc_isPrune(
  "TypeTagType",
)<TypeTagType>(TypeTagType)((input) => typia.misc.isPrune<TypeTagType>(input));
