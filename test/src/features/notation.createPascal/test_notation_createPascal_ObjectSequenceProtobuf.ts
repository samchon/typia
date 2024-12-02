import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_createValidatePascal_ObjectSequenceProtobuf =
  _test_notation_validateGeneral(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)<
    typia.PascalCase<ObjectSequenceProtobuf>
  >({
    convert: typia.notations.createValidatePascal<ObjectSequenceProtobuf>(),
    assert: typia.createAssert<typia.PascalCase<ObjectSequenceProtobuf>>(),
  });
