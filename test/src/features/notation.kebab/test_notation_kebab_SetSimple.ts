import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_validateKebab_SetSimple = (): void =>
  _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
    typia.KebabCase<SetSimple>
  >({
    convert: (input) => typia.notations.validateKebab<SetSimple>(input),
    assert: typia.createAssert<typia.KebabCase<SetSimple>>(),
  });
