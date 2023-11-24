import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_createValidateSnake_ArraySimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)<
    typia.SnakeCase<ArraySimpleProtobufNullable>
  >({
    convert: typia.notations.createValidateSnake<ArraySimpleProtobufNullable>(),
    assert: typia.createAssert<typia.SnakeCase<ArraySimpleProtobufNullable>>(),
  });
