import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_createValidateKebab_ObjectHttpNullable = (): void =>
  _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )<typia.KebabCase<ObjectHttpNullable>>({
    convert: typia.notations.createValidateKebab<ObjectHttpNullable>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpNullable>>(),
  });
