import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_notation_createValidateSnake_TypeTagObjectUnion =
  _test_notation_validateGeneral("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )<typia.SnakeCase<TypeTagObjectUnion>>({
    convert: typia.notations.createValidateSnake<TypeTagObjectUnion>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagObjectUnion>>(),
  });
