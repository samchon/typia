import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_prune_TypeTagMatrix = (): void =>
  _test_misc_prune("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
    typia.misc.prune<TypeTagMatrix>(input),
  );
