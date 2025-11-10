import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_createValidateKebab_ClassNonPublic = (): void =>
  _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )<typia.KebabCase<ClassNonPublic>>({
    convert: typia.notations.createValidateKebab<ClassNonPublic>(),
    assert: typia.createAssert<typia.KebabCase<ClassNonPublic>>(),
  });
