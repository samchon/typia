import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_createValidateKebab_ClassPropertyAssignment =
  (): void =>
    _test_notation_validateGeneral(
      "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)<
      typia.KebabCase<ClassPropertyAssignment>
    >({
      convert: typia.notations.createValidateKebab<ClassPropertyAssignment>(),
      assert: typia.createAssert<typia.KebabCase<ClassPropertyAssignment>>(),
    });
