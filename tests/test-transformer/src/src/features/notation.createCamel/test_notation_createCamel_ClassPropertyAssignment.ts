import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_notation_createValidateCamel_ClassPropertyAssignment = (): void =>
    _test_notation_validateGeneral("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment
  )<typia.CamelCase<ClassPropertyAssignment>>({
    convert: typia.notations.createValidateCamel<ClassPropertyAssignment>(),
    assert: typia.createAssert<typia.CamelCase<ClassPropertyAssignment>>(),
  });
