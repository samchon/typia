import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createValidate_TypeTagNaN = _test_validate(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)(typia.createValidate<TypeTagNaN>());
