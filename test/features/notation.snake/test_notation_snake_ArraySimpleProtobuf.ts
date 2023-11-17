import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_validateSnake_ArraySimpleProtobuf =
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.SnakeCase<ArraySimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validateSnake<ArraySimpleProtobuf>(input),
    assert: typia.createAssert<typia.SnakeCase<ArraySimpleProtobuf>>(),
  });
