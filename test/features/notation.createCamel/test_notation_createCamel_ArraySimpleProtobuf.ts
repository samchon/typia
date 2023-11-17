import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_createValidateCamel_ArraySimpleProtobuf =
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.CamelCase<ArraySimpleProtobuf>>({
    convert: typia.notations.createValidateCamel<ArraySimpleProtobuf>(),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobuf>>(),
  });
