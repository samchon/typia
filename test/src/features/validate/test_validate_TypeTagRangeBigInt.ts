import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_validate_TypeTagRangeBigInt = (): void =>
  _test_validate("TypeTagRangeBigInt")<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    (input) => typia.validate<TypeTagRangeBigInt>(input),
  );
