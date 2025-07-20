import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_createValidateCamel_ObjectSimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
      typia.CamelCase<ObjectSimpleProtobufNullable>
    >({
      convert:
        typia.notations.createValidateCamel<ObjectSimpleProtobufNullable>(),
      assert:
        typia.createAssert<typia.CamelCase<ObjectSimpleProtobufNullable>>(),
    });
