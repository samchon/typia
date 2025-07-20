import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_validateCamel_ObjectSimpleProtobuf = (): void =>
  _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )<typia.CamelCase<ObjectSimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validateCamel<ObjectSimpleProtobuf>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectSimpleProtobuf>>(),
  });
