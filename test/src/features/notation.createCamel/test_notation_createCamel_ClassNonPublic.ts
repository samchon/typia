import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_createValidateCamel_ClassNonPublic = (): void =>
    _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic
  )<typia.CamelCase<ClassNonPublic>>({
    convert: typia.notations.createValidateCamel<ClassNonPublic>(),
    assert: typia.createAssert<typia.CamelCase<ClassNonPublic>>(),
  });
