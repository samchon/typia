import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_createValidateSnake_TypeTagLength =
  _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(TypeTagLength)<
    typia.SnakeCase<TypeTagLength>
  >({
    convert: typia.notations.createValidateSnake<TypeTagLength>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagLength>>(),
  });
