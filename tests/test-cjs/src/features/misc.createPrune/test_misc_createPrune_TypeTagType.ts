import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_createPrune_TypeTagType = (): void =>
  _test_misc_prune("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.misc.createPrune<TypeTagType>(),
  );
