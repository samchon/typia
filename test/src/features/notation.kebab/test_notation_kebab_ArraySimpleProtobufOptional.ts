import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_validateKebab_ArraySimpleProtobufOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
      typia.KebabCase<ArraySimpleProtobufOptional>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ArraySimpleProtobufOptional>(input),
      assert:
        typia.createAssert<typia.KebabCase<ArraySimpleProtobufOptional>>(),
    });
