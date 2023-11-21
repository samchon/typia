import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_notation_validateSnake_TypeTagType =
  _test_notation_validateGeneral("TypeTagType")<TypeTagType>(TypeTagType)<
    typia.SnakeCase<TypeTagType>
  >({
    convert: (input) => typia.notations.validateSnake<TypeTagType>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagType>>(),
  });
