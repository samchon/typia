import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_validateCamel_ObjectSimple =
  _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.CamelCase<ObjectSimple>
  >({
    convert: (input) => typia.notations.validateCamel<ObjectSimple>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectSimple>>(),
  });
