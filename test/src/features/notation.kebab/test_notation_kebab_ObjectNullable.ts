import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_validateKebab_ObjectNullable = (): void =>
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.KebabCase<ObjectNullable>>({
    convert: (input) => typia.notations.validateKebab<ObjectNullable>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectNullable>>(),
  });
