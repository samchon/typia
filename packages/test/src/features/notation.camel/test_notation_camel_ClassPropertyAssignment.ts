import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_validateCamel_ClassPropertyAssignment =
  _test_notation_validateGeneral(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)<
    typia.CamelCase<ClassPropertyAssignment>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ClassPropertyAssignment>(input),
    assert: typia.createAssert<typia.CamelCase<ClassPropertyAssignment>>(),
  });
