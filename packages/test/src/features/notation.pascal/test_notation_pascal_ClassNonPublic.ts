import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_validatePascal_ClassNonPublic =
  _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )<typia.PascalCase<ClassNonPublic>>({
    convert: (input) => typia.notations.validatePascal<ClassNonPublic>(input),
    assert: typia.createAssert<typia.PascalCase<ClassNonPublic>>(),
  });
