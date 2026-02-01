import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_createValidateSnake_ObjectSequenceProtobuf = (): void =>
    _test_notation_validateGeneral("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
        ObjectSequenceProtobuf
  )<typia.SnakeCase<ObjectSequenceProtobuf>>({
    convert: typia.notations.createValidateSnake<ObjectSequenceProtobuf>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectSequenceProtobuf>>(),
  });
