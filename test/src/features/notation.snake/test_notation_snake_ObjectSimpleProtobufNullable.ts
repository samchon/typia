import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_validateSnake_ObjectSimpleProtobufNullable = (): void =>
    _test_notation_validateGeneral("ObjectSimpleProtobufNullable")<ObjectSimpleProtobufNullable>(
        ObjectSimpleProtobufNullable
  )<typia.SnakeCase<ObjectSimpleProtobufNullable>>({
    convert: (input) => typia.notations.validateSnake<ObjectSimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectSimpleProtobufNullable>>(),
  });
