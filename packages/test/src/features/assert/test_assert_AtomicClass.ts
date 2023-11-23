import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assert_AtomicClass = _test_assert("AtomicClass")<AtomicClass>(
  AtomicClass,
)((input) => typia.assert<AtomicClass>(input));
