import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createPrune_TypeTagDefault = (): void =>
  _test_misc_prune("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.misc.createPrune<TypeTagDefault>(),
  );
