import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertEquals_TypeTagType = _test_assertEquals(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.createAssertEquals<TypeTagType>());
