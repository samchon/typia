import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_validateCamel_ClassNonPublic =
  _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )<typia.CamelCase<ClassNonPublic>>({
    convert: (input) => typia.notations.validateCamel<ClassNonPublic>(input),
    assert: typia.createAssert<typia.CamelCase<ClassNonPublic>>(),
  });
