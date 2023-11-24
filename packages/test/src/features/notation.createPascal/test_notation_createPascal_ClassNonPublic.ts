import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_createValidatePascal_ClassNonPublic =
  _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )<typia.PascalCase<ClassNonPublic>>({
    convert: typia.notations.createValidatePascal<ClassNonPublic>(),
    assert: typia.createAssert<typia.PascalCase<ClassNonPublic>>(),
  });
