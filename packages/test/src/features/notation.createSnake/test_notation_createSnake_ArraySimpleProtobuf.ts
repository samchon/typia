import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_createValidateSnake_ArraySimpleProtobuf =
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.SnakeCase<ArraySimpleProtobuf>>({
    convert: typia.notations.createValidateSnake<ArraySimpleProtobuf>(),
    assert: typia.createAssert<typia.SnakeCase<ArraySimpleProtobuf>>(),
  });
