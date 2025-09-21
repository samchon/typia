import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_createValidateKebab_ArraySimpleProtobufOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
      typia.KebabCase<ArraySimpleProtobufOptional>
    >({
      convert:
        typia.notations.createValidateKebab<ArraySimpleProtobufOptional>(),
      assert:
        typia.createAssert<typia.KebabCase<ArraySimpleProtobufOptional>>(),
    });
