import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_createValidateCamel_ObjectSimpleProtobufOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
      typia.CamelCase<ObjectSimpleProtobufOptional>
    >({
      convert:
        typia.notations.createValidateCamel<ObjectSimpleProtobufOptional>(),
      assert:
        typia.createAssert<typia.CamelCase<ObjectSimpleProtobufOptional>>(),
    });
