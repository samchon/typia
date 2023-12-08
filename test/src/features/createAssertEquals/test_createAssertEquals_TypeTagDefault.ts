import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertEquals_TypeTagDefault = _test_assertEquals(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)(typia.createAssertEquals<TypeTagDefault>());
