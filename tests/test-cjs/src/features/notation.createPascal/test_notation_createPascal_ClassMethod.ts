import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_createValidatePascal_ClassMethod = (): void =>
  _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
    typia.PascalCase<ClassMethod>
  >({
    convert: typia.notations.createValidatePascal<ClassMethod>(),
    assert: typia.createAssert<typia.PascalCase<ClassMethod>>(),
  });
