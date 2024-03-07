import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_assertEquals_TypeTagType = _test_assertEquals(TypeGuardError)(
  "TypeTagType",
)<TypeTagType>(TypeTagType)((input) => typia.assertEquals<TypeTagType>(input));
