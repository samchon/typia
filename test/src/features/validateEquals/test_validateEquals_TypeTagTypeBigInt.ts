import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_validateEquals_TypeTagTypeBigInt = (): void =>
  _test_validateEquals("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )((input) => typia.validateEquals<TypeTagTypeBigInt>(input));
