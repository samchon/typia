import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_createValidatePascal_ArraySimpleProtobufOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
      typia.PascalCase<ArraySimpleProtobufOptional>
    >({
      convert:
        typia.notations.createValidatePascal<ArraySimpleProtobufOptional>(),
      assert:
        typia.createAssert<typia.PascalCase<ArraySimpleProtobufOptional>>(),
    });
