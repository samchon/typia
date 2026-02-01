import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_validateCamel_ArraySimpleProtobufOptional = (): void =>
    _test_notation_validateGeneral("ArraySimpleProtobufOptional")<ArraySimpleProtobufOptional>(
        ArraySimpleProtobufOptional
  )<typia.CamelCase<ArraySimpleProtobufOptional>>({
    convert: (input) => typia.notations.validateCamel<ArraySimpleProtobufOptional>(input),
    assert: typia.createAssert<typia.CamelCase<ArraySimpleProtobufOptional>>(),
  });
