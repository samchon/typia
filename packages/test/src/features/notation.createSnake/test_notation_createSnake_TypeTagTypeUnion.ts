import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_notation_createValidateSnake_TypeTagTypeUnion =
  _test_notation_validateGeneral("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )<typia.SnakeCase<TypeTagTypeUnion>>({
    convert: typia.notations.createValidateSnake<TypeTagTypeUnion>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagTypeUnion>>(),
  });
