import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_validateKebab_ObjectHttpNullable = (): void =>
  _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )<typia.KebabCase<ObjectHttpNullable>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectHttpNullable>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpNullable>>(),
  });
