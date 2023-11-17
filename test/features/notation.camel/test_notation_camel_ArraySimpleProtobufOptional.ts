import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_validateCamel_ArraySimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
    typia.CamelCase<ArraySimpleProtobufOptional>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ArraySimpleProtobufOptional>(input),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobufOptional>>(),
  });
