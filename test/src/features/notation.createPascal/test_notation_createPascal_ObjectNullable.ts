import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_createValidatePascal_ObjectNullable = (): void =>
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.PascalCase<ObjectNullable>>({
    convert: typia.notations.createValidatePascal<ObjectNullable>(),
    assert: typia.createAssert<typia.PascalCase<ObjectNullable>>(),
  });
