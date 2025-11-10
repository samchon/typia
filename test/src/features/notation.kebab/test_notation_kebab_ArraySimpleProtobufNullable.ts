import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_validateKebab_ArraySimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)<
      typia.KebabCase<ArraySimpleProtobufNullable>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ArraySimpleProtobufNullable>(input),
      assert:
        typia.createAssert<typia.KebabCase<ArraySimpleProtobufNullable>>(),
    });
