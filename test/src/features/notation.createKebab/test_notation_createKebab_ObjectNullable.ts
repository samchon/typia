import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_createValidateKebab_ObjectNullable = (): void =>
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.KebabCase<ObjectNullable>>({
    convert: typia.notations.createValidateKebab<ObjectNullable>(),
    assert: typia.createAssert<typia.KebabCase<ObjectNullable>>(),
  });
