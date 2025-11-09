import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_validateSnake_ObjectSimpleProtobuf = (): void =>
    _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf
  )<typia.SnakeCase<ObjectSimpleProtobuf>>({
    convert: (input) => typia.notations.validateSnake<ObjectSimpleProtobuf>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectSimpleProtobuf>>(),
  });
