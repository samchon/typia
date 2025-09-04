import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_validateSnake_TypeTagObjectUnion = (): void =>
  _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )<typia.SnakeCase<TypeTagObjectUnion>>({
    convert: (input) =>
      typia.notations.validateSnake<TypeTagObjectUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagObjectUnion>>(),
  });
