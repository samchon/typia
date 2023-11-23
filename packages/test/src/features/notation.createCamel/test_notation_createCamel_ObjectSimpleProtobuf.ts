import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_createValidateCamel_ObjectSimpleProtobuf =
  _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )<typia.CamelCase<ObjectSimpleProtobuf>>({
    convert: typia.notations.createValidateCamel<ObjectSimpleProtobuf>(),
    assert: typia.createAssert<typia.CamelCase<ObjectSimpleProtobuf>>(),
  });
