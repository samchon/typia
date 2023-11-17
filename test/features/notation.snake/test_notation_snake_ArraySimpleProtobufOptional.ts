import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_validateSnake_ArraySimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
    typia.SnakeCase<ArraySimpleProtobufOptional>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArraySimpleProtobufOptional>(input),
    assert: typia.createAssert<typia.SnakeCase<ArraySimpleProtobufOptional>>(),
  });
