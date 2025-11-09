import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_validateCamel_ArraySimpleProtobuf = (): void =>
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.CamelCase<ArraySimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validateCamel<ArraySimpleProtobuf>(input),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobuf>>(),
  });
