import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_createValidateCamel_ObjectSequenceProtobuf = (): void =>
    _test_notation_validateGeneral("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
        ObjectSequenceProtobuf
  )<typia.CamelCase<ObjectSequenceProtobuf>>({
    convert: typia.notations.createValidateCamel<ObjectSequenceProtobuf>(),
    assert: typia.createAssert<typia.CamelCase<ObjectSequenceProtobuf>>(),
  });
