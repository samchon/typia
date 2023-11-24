import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assert_AtomicSimple = _test_assert(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) => typia.assert<AtomicSimple>(input));
