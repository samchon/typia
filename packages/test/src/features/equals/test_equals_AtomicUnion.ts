import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_equals_AtomicUnion = _test_equals("AtomicUnion")<AtomicUnion>(
  AtomicUnion,
)((input) => typia.equals<AtomicUnion>(input));
