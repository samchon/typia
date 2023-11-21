import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_notation_validateSnake_TypeTagCustom =
  _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)<
    typia.SnakeCase<TypeTagCustom>
  >({
    convert: (input) => typia.notations.validateSnake<TypeTagCustom>(input),
    assert: typia.createAssert<typia.SnakeCase<TypeTagCustom>>(),
  });
