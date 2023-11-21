import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_validateCamel_ArraySimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)<
    typia.CamelCase<ArraySimpleProtobufNullable>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ArraySimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobufNullable>>(),
  });
