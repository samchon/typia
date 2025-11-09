import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createClone_AtomicAlias = (): void =>
  _test_misc_clone("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.misc.createClone<AtomicAlias>(),
  );
