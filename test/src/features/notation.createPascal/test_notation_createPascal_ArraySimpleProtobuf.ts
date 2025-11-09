import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_notation_createValidatePascal_ArraySimpleProtobuf = (): void =>
    _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf
  )<typia.PascalCase<ArraySimpleProtobuf>>({
    convert: typia.notations.createValidatePascal<ArraySimpleProtobuf>(),
    assert: typia.createAssert<typia.PascalCase<ArraySimpleProtobuf>>(),
  });
