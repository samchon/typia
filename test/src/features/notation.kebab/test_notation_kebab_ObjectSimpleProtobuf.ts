import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_validateKebab_ObjectSimpleProtobuf = (): void =>
  _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )<typia.KebabCase<ObjectSimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectSimpleProtobuf>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectSimpleProtobuf>>(),
  });
