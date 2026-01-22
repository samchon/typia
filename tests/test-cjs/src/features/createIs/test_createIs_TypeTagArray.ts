import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createIs_TypeTagArray = (): void =>
  _test_is("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.createIs<TypeTagArray>(),
  );
