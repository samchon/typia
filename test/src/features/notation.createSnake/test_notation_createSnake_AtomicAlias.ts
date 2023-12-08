import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_createValidateSnake_AtomicAlias =
  _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(AtomicAlias)<
    typia.SnakeCase<AtomicAlias>
  >({
    convert: typia.notations.createValidateSnake<AtomicAlias>(),
    assert: typia.createAssert<typia.SnakeCase<AtomicAlias>>(),
  });
