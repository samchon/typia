import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_notation_validateCamel_ObjectNullable =
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.CamelCase<ObjectNullable>>({
    convert: (input) => typia.notations.validateCamel<ObjectNullable>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectNullable>>(),
  });
