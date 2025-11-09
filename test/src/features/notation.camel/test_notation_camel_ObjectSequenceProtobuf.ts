import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_validateCamel_ObjectSequenceProtobuf = (): void =>
    _test_notation_validateGeneral("ObjectSequenceProtobuf")<ObjectSequenceProtobuf>(
        ObjectSequenceProtobuf
  )<typia.CamelCase<ObjectSequenceProtobuf>>({
    convert: (input) => typia.notations.validateCamel<ObjectSequenceProtobuf>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectSequenceProtobuf>>(),
  });
