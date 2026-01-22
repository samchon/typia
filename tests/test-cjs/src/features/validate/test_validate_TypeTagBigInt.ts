import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_validate_TypeTagBigInt = (): void =>
  _test_validate("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)((input) =>
    typia.validate<TypeTagBigInt>(input),
  );
