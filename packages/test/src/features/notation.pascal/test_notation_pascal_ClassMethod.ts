import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_validatePascal_ClassMethod =
  _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
    typia.PascalCase<ClassMethod>
  >({
    convert: (input) => typia.notations.validatePascal<ClassMethod>(input),
    assert: typia.createAssert<typia.PascalCase<ClassMethod>>(),
  });
