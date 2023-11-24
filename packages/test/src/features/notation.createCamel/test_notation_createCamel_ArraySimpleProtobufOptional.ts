import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_createValidateCamel_ArraySimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
    typia.CamelCase<ArraySimpleProtobufOptional>
  >({
    convert: typia.notations.createValidateCamel<ArraySimpleProtobufOptional>(),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobufOptional>>(),
  });
