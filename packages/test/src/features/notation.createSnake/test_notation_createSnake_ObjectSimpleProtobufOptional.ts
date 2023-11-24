import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_createValidateSnake_ObjectSimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
    typia.SnakeCase<ObjectSimpleProtobufOptional>
  >({
    convert:
      typia.notations.createValidateSnake<ObjectSimpleProtobufOptional>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectSimpleProtobufOptional>>(),
  });
