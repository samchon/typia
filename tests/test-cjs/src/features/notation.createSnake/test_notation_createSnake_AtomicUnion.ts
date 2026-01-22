import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_notation_createValidateSnake_AtomicUnion = (): void =>
  _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(AtomicUnion)<
    typia.SnakeCase<AtomicUnion>
  >({
    convert: typia.notations.createValidateSnake<AtomicUnion>(),
    assert: typia.createAssert<typia.SnakeCase<AtomicUnion>>(),
  });
