import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_isPrune_TypeTagFormat = (): void =>
  _test_misc_isPrune("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
    typia.misc.isPrune<TypeTagFormat>(input),
  );
