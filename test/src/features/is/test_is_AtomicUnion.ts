import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_is_AtomicUnion = (): void =>
  _test_is("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
    typia.is<AtomicUnion>(input),
  );
