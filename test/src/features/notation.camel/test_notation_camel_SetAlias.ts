import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_validateCamel_SetAlias = (): void =>
  _test_notation_validateGeneral("SetAlias")<SetAlias>(SetAlias)<
    typia.CamelCase<SetAlias>
  >({
    convert: (input) => typia.notations.validateCamel<SetAlias>(input),
    assert: typia.createAssert<typia.CamelCase<SetAlias>>(),
  });
