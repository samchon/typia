import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_createValidateKebab_ArraySimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)<
      typia.KebabCase<ArraySimpleProtobufNullable>
    >({
      convert:
        typia.notations.createValidateKebab<ArraySimpleProtobufNullable>(),
      assert:
        typia.createAssert<typia.KebabCase<ArraySimpleProtobufNullable>>(),
    });
