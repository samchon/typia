import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createIsPrune_TypeTagArray = (): void =>
  _test_misc_isPrune("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.misc.createIsPrune<TypeTagArray>(),
  );
