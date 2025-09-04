import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_validatePascal_ObjectSequenceProtobuf = (): void =>
  _test_notation_validateGeneral(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)<
    typia.PascalCase<ObjectSequenceProtobuf>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectSequenceProtobuf>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectSequenceProtobuf>>(),
  });
