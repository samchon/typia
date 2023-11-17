import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_notation_createValidateSnake_TypeTagTypeBigInt =
  _test_notation_validateGeneral("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )<typia.SnakeCase<TypeTagTypeBigInt>>({
    convert: typia.notations.createValidateSnake<TypeTagTypeBigInt>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagTypeBigInt>>(),
  });
