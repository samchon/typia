import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_equals_TypeTagBigInt = _test_equals(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) => typia.equals<TypeTagBigInt>(input));
