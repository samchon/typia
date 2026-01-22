import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createIs_TypeTagBigInt = (): void =>
  _test_is("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
    typia.createIs<TypeTagBigInt>(),
  );
