import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_createValidateCamel_SetAlias =
  _test_notation_validateGeneral("SetAlias")<SetAlias>(SetAlias)<
    typia.CamelCase<SetAlias>
  >({
    convert: typia.notations.createValidateCamel<SetAlias>(),
    assert: typia.createAssert<typia.CamelCase<SetAlias>>(),
  });
