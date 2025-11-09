import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_validateCamel_ObjectDate = (): void =>
  _test_notation_validateGeneral("ObjectDate")<ObjectDate>(ObjectDate)<
    typia.CamelCase<ObjectDate>
  >({
    convert: (input) => typia.notations.validateCamel<ObjectDate>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectDate>>(),
  });
