import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createIs_AtomicAlias = (): void =>
  _test_is("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.createIs<AtomicAlias>(),
  );
