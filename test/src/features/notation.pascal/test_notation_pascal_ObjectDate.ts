import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_notation_validatePascal_ObjectDate = (): void =>
  _test_notation_validateGeneral("ObjectDate")<ObjectDate>(ObjectDate)<
    typia.PascalCase<ObjectDate>
  >({
    convert: (input) => typia.notations.validatePascal<ObjectDate>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectDate>>(),
  });
