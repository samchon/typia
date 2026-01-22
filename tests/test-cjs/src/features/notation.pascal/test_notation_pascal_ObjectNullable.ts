import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_validatePascal_ObjectNullable = (): void =>
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.PascalCase<ObjectNullable>>({
    convert: (input) => typia.notations.validatePascal<ObjectNullable>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectNullable>>(),
  });
