import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_validateKebab_SetAlias = (): void =>
  _test_notation_validateGeneral("SetAlias")<SetAlias>(SetAlias)<
    typia.KebabCase<SetAlias>
  >({
    convert: (input) => typia.notations.validateKebab<SetAlias>(input),
    assert: typia.createAssert<typia.KebabCase<SetAlias>>(),
  });
