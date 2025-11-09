import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_createValidateSnake_AtomicSimple = (): void =>
    _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(
        AtomicSimple
  )<typia.SnakeCase<AtomicSimple>>({
    convert: typia.notations.createValidateSnake<AtomicSimple>(),
    assert: typia.createAssert<typia.SnakeCase<AtomicSimple>>(),
  });
