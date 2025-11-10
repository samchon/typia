import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_validateKebab_ArraySimpleProtobuf = (): void =>
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.KebabCase<ArraySimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validateKebab<ArraySimpleProtobuf>(input),
    assert: typia.createAssert<typia.KebabCase<ArraySimpleProtobuf>>(),
  });
