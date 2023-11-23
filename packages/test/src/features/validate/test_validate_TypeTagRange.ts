import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_validate_TypeTagRange = _test_validate(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) => typia.validate<TypeTagRange>(input));
