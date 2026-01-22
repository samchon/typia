import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_isPrune_AtomicUnion = (): void =>
  _test_misc_isPrune("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
    typia.misc.isPrune<AtomicUnion>(input),
  );
