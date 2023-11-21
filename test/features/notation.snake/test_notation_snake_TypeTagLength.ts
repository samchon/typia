import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_validateSnake_TypeTagLength =
  _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(TypeTagLength)<
    typia.SnakeCase<TypeTagLength>
  >({
    convert: (input) => typia.notations.validateSnake<TypeTagLength>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagLength>>(),
  });
