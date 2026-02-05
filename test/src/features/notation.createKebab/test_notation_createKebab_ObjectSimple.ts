import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_notation_createValidateKebab_ObjectSimple = (): void =>
  _test_notation_validateGeneral("ObjectSimple")<ObjectSimple>(ObjectSimple)<
    typia.KebabCase<ObjectSimple>
  >({
    convert: typia.notations.createValidateKebab<ObjectSimple>(),
    assert: typia.createAssert<typia.KebabCase<ObjectSimple>>(),
  });
