import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createIsClone_AtomicUnion = (): void =>
  _test_misc_isClone("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.misc.createIsClone<AtomicUnion>(),
  );
