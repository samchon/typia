import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_createValidateSnake_SetAlias =
  _test_notation_validateGeneral("SetAlias")<SetAlias>(SetAlias)<
    typia.SnakeCase<SetAlias>
  >({
    convert: typia.notations.createValidateSnake<SetAlias>(),
    assert: typia.createAssert<typia.SnakeCase<SetAlias>>(),
  });
