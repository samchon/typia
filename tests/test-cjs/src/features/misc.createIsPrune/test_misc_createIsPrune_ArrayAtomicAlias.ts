import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_createIsPrune_ArrayAtomicAlias = (): void =>
  _test_misc_isPrune("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.misc.createIsPrune<ArrayAtomicAlias>(),
  );
