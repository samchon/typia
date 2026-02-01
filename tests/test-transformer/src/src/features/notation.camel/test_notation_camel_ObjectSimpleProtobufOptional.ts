import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_validateCamel_ObjectSimpleProtobufOptional = (): void =>
    _test_notation_validateGeneral("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
        ObjectSimpleProtobufOptional
  )<typia.CamelCase<ObjectSimpleProtobufOptional>>({
    convert: (input) => typia.notations.validateCamel<ObjectSimpleProtobufOptional>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectSimpleProtobufOptional>>(),
  });
