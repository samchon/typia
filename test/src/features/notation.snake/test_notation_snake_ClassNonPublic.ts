import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_validateSnake_ClassNonPublic = (): void =>
    _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic
  )<typia.SnakeCase<ClassNonPublic>>({
    convert: (input) => typia.notations.validateSnake<ClassNonPublic>(input),
    assert: typia.createAssert<typia.SnakeCase<ClassNonPublic>>(),
  });
