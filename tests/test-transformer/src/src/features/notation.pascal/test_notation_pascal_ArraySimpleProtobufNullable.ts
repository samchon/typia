import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_validatePascal_ArraySimpleProtobufNullable = (): void =>
    _test_notation_validateGeneral("ArraySimpleProtobufNullable")<ArraySimpleProtobufNullable>(
        ArraySimpleProtobufNullable
  )<typia.PascalCase<ArraySimpleProtobufNullable>>({
    convert: (input) => typia.notations.validatePascal<ArraySimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.PascalCase<ArraySimpleProtobufNullable>>(),
  });
