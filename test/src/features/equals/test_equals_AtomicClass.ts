import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_equals_AtomicClass = (): void =>
  _test_equals("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
    typia.equals<AtomicClass>(input),
  );
