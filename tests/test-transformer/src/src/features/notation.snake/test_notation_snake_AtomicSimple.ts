import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_validateSnake_AtomicSimple = (): void =>
    _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(
        AtomicSimple
  )<typia.SnakeCase<AtomicSimple>>({
    convert: (input) => typia.notations.validateSnake<AtomicSimple>(input),
    assert: typia.createAssert<typia.SnakeCase<AtomicSimple>>(),
  });
