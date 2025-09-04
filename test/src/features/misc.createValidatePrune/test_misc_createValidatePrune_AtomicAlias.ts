import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createValidatePrune_AtomicAlias = (): void =>
  _test_misc_validatePrune("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.misc.createValidatePrune<AtomicAlias>(),
  );
