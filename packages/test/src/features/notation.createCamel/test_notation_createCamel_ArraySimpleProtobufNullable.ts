import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_createValidateCamel_ArraySimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)<
    typia.CamelCase<ArraySimpleProtobufNullable>
  >({
    convert: typia.notations.createValidateCamel<ArraySimpleProtobufNullable>(),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobufNullable>>(),
  });
