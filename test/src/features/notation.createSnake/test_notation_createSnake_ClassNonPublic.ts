import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_createValidateSnake_ClassNonPublic = (): void =>
  _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )<typia.SnakeCase<ClassNonPublic>>({
    convert: typia.notations.createValidateSnake<ClassNonPublic>(),
    assert: typia.createAssert<typia.SnakeCase<ClassNonPublic>>(),
  });
