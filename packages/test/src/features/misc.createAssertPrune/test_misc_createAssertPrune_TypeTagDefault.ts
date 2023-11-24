import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createAssertPrune_TypeTagDefault =
  _test_misc_assertPrune("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.misc.createAssertPrune<TypeTagDefault>(),
  );
