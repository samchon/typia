import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertEquals_TypeTagRange = _test_assertEquals(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.createAssertEquals<TypeTagRange>());
