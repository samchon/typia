import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createIsPrune_AtomicAlias = (): void =>
  _test_misc_isPrune("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.misc.createIsPrune<AtomicAlias>(),
  );
