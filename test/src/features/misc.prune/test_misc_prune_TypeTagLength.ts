import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_prune_TypeTagLength = (): void =>
  _test_misc_prune("TypeTagLength")<TypeTagLength>(TypeTagLength)((input) =>
    typia.misc.prune<TypeTagLength>(input),
  );
