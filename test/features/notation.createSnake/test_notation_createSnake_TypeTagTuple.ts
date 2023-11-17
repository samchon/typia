import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_notation_createValidateSnake_TypeTagTuple =
  _test_notation_validateGeneral("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)<
    typia.SnakeCase<TypeTagTuple>
  >({
    convert: typia.notations.createValidateSnake<TypeTagTuple>(),
    assert: typia.createAssert<typia.SnakeCase<TypeTagTuple>>(),
  });
