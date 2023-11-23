import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createEquals_TypeTagNaN = _test_equals(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)(typia.createEquals<TypeTagNaN>());
