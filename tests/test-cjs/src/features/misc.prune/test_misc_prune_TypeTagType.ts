import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_prune_TypeTagType = (): void =>
  _test_misc_prune("TypeTagType")<TypeTagType>(TypeTagType)((input) =>
    typia.misc.prune<TypeTagType>(input),
  );
