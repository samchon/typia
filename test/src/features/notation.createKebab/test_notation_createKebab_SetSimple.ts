import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_createValidateKebab_SetSimple = (): void =>
  _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
    typia.KebabCase<SetSimple>
  >({
    convert: typia.notations.createValidateKebab<SetSimple>(),
    assert: typia.createAssert<typia.KebabCase<SetSimple>>(),
  });
