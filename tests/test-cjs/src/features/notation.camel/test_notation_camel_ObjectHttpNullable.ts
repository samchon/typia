import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_validateCamel_ObjectHttpNullable = (): void =>
  _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )<typia.CamelCase<ObjectHttpNullable>>({
    convert: (input) =>
      typia.notations.validateCamel<ObjectHttpNullable>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectHttpNullable>>(),
  });
