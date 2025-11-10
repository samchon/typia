import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_notation_createValidateKebab_ObjectPrimitive = (): void =>
  _test_notation_validateGeneral("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )<typia.KebabCase<ObjectPrimitive>>({
    convert: typia.notations.createValidateKebab<ObjectPrimitive>(),
    assert: typia.createAssert<typia.KebabCase<ObjectPrimitive>>(),
  });
