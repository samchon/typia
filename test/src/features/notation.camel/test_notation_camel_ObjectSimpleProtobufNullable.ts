import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_validateCamel_ObjectSimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
      typia.CamelCase<ObjectSimpleProtobufNullable>
    >({
      convert: (input) =>
        typia.notations.validateCamel<ObjectSimpleProtobufNullable>(input),
      assert:
        typia.createAssert<typia.CamelCase<ObjectSimpleProtobufNullable>>(),
    });
