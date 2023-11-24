import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_equals_TypeTagTypeBigInt = _test_equals(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.equals<TypeTagTypeBigInt>(input),
);
