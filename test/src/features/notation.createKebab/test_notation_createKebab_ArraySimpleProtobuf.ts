import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_createValidateKebab_ArraySimpleProtobuf = (): void =>
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.KebabCase<ArraySimpleProtobuf>>({
    convert: typia.notations.createValidateKebab<ArraySimpleProtobuf>(),
    assert: typia.createAssert<typia.KebabCase<ArraySimpleProtobuf>>(),
  });
