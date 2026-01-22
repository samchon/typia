import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createEquals_AtomicUnion = (): void =>
  _test_equals("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.createEquals<AtomicUnion>(),
  );
