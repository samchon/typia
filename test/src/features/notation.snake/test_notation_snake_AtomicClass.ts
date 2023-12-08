import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_validateSnake_AtomicClass =
  _test_notation_validateGeneral("AtomicClass")<AtomicClass>(AtomicClass)<
    typia.SnakeCase<AtomicClass>
  >({
    convert: (input) => typia.notations.validateSnake<AtomicClass>(input),
    assert: typia.createAssert<typia.SnakeCase<AtomicClass>>(),
  });
