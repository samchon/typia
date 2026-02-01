import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_createValidateCamel_ObjectDate = (): void =>
    _test_notation_validateGeneral("ObjectDate")<ObjectDate>(
        ObjectDate
  )<typia.CamelCase<ObjectDate>>({
    convert: typia.notations.createValidateCamel<ObjectDate>(),
    assert: typia.createAssert<typia.CamelCase<ObjectDate>>(),
  });
