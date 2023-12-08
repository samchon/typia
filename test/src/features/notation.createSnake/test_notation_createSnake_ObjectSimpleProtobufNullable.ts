import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_createValidateSnake_ObjectSimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
    typia.SnakeCase<ObjectSimpleProtobufNullable>
  >({
    convert:
      typia.notations.createValidateSnake<ObjectSimpleProtobufNullable>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectSimpleProtobufNullable>>(),
  });
