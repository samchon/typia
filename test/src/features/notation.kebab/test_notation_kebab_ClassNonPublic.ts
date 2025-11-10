import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_notation_validateKebab_ClassNonPublic = (): void =>
  _test_notation_validateGeneral("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )<typia.KebabCase<ClassNonPublic>>({
    convert: (input) => typia.notations.validateKebab<ClassNonPublic>(input),
    assert: typia.createAssert<typia.KebabCase<ClassNonPublic>>(),
  });
