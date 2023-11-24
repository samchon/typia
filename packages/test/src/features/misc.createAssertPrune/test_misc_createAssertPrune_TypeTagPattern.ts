import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createAssertPrune_TypeTagPattern =
  _test_misc_assertPrune("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
    typia.misc.createAssertPrune<TypeTagPattern>(),
  );
