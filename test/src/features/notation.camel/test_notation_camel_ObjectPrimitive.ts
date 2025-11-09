import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_notation_validateCamel_ObjectPrimitive = (): void =>
  _test_notation_validateGeneral("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )<typia.CamelCase<ObjectPrimitive>>({
    convert: (input) => typia.notations.validateCamel<ObjectPrimitive>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectPrimitive>>(),
  });
