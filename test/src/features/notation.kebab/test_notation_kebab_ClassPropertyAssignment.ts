import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_validateKebab_ClassPropertyAssignment = (): void =>
  _test_notation_validateGeneral(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)<
    typia.KebabCase<ClassPropertyAssignment>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ClassPropertyAssignment>(input),
    assert: typia.createAssert<typia.KebabCase<ClassPropertyAssignment>>(),
  });
