import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_validateKebab_ClassMethod = (): void =>
  _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
    typia.KebabCase<ClassMethod>
  >({
    convert: (input) => typia.notations.validateKebab<ClassMethod>(input),
    assert: typia.createAssert<typia.KebabCase<ClassMethod>>(),
  });
