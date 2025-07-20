import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_createValidatePascal_ObjectDate = (): void =>
  _test_notation_validateGeneral("ObjectDate")<ObjectDate>(ObjectDate)<
    typia.PascalCase<ObjectDate>
  >({
    convert: typia.notations.createValidatePascal<ObjectDate>(),
    assert: typia.createAssert<typia.PascalCase<ObjectDate>>(),
  });
