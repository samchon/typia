import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_notation_validateSnake_AtomicUnion = (): void =>
    _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(
        AtomicUnion
  )<typia.SnakeCase<AtomicUnion>>({
    convert: (input) => typia.notations.validateSnake<AtomicUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<AtomicUnion>>(),
  });
