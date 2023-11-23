import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_createValidateSnake_ClassMethod =
  _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
    typia.SnakeCase<ClassMethod>
  >({
    convert: typia.notations.createValidateSnake<ClassMethod>(),
    assert: typia.createAssert<typia.SnakeCase<ClassMethod>>(),
  });
