import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_createIsPrune_ArrayUnion = (): void =>
  _test_misc_isPrune("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.misc.createIsPrune<ArrayUnion>(),
  );
