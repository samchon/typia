import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_validatePrune_AtomicClass = (): void =>
  _test_misc_validatePrune("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
    typia.misc.validatePrune<AtomicClass>(input),
  );
