import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createValidatePrune_AtomicClass = (): void =>
  _test_misc_validatePrune("AtomicClass")<AtomicClass>(AtomicClass)(
    typia.misc.createValidatePrune<AtomicClass>(),
  );
