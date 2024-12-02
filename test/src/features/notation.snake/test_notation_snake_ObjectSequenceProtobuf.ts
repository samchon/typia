import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_validateSnake_ObjectSequenceProtobuf =
  _test_notation_validateGeneral(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)<
    typia.SnakeCase<ObjectSequenceProtobuf>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ObjectSequenceProtobuf>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectSequenceProtobuf>>(),
  });
