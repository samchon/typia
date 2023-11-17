import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_validateSnake_ArraySimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)<
    typia.SnakeCase<ArraySimpleProtobufNullable>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArraySimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.SnakeCase<ArraySimpleProtobufNullable>>(),
  });
