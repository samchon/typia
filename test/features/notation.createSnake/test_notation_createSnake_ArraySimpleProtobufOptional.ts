import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_createValidateSnake_ArraySimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
    typia.SnakeCase<ArraySimpleProtobufOptional>
  >({
    convert: typia.notations.createValidateSnake<ArraySimpleProtobufOptional>(),
    assert: typia.createAssert<typia.SnakeCase<ArraySimpleProtobufOptional>>(),
  });
