import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createValidateEquals_TypeTagBigInt = (): void =>
  _test_validateEquals("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
    typia.createValidateEquals<TypeTagBigInt>(),
  );
