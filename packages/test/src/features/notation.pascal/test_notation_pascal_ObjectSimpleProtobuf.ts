import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_validatePascal_ObjectSimpleProtobuf =
  _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )<typia.PascalCase<ObjectSimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectSimpleProtobuf>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectSimpleProtobuf>>(),
  });
