import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_validateSnake_ClassPropertyAssignment =
  _test_notation_validateGeneral(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)<
    typia.SnakeCase<ClassPropertyAssignment>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ClassPropertyAssignment>(input),
    assert: typia.createAssert<typia.SnakeCase<ClassPropertyAssignment>>(),
  });
