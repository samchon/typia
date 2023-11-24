import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createEquals_TypeTagPattern = _test_equals(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.createEquals<TypeTagPattern>());
