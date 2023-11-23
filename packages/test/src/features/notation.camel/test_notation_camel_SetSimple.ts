import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetSimple } from "../../structures/SetSimple";

export const test_notation_validateCamel_SetSimple =
  _test_notation_validateGeneral("SetSimple")<SetSimple>(SetSimple)<
    typia.CamelCase<SetSimple>
  >({
    convert: (input) => typia.notations.validateCamel<SetSimple>(input),
    assert: typia.createAssert<typia.CamelCase<SetSimple>>(),
  });
