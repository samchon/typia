import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_is_TypeTagTypeBigInt = _test_is(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  typia.is<TypeTagTypeBigInt>(input),
);
