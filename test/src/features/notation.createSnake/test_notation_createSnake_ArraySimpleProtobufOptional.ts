import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_createValidateSnake_ArraySimpleProtobufOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
      typia.SnakeCase<ArraySimpleProtobufOptional>
    >({
      convert:
        typia.notations.createValidateSnake<ArraySimpleProtobufOptional>(),
      assert:
        typia.createAssert<typia.SnakeCase<ArraySimpleProtobufOptional>>(),
    });
