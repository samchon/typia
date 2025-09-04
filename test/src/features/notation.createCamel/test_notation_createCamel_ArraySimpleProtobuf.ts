import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_createValidateCamel_ArraySimpleProtobuf = (): void =>
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.CamelCase<ArraySimpleProtobuf>>({
    convert: typia.notations.createValidateCamel<ArraySimpleProtobuf>(),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobuf>>(),
  });
