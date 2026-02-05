import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_createValidateKebab_ObjectSimpleProtobufOptional =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
      typia.KebabCase<ObjectSimpleProtobufOptional>
    >({
      convert:
        typia.notations.createValidateKebab<ObjectSimpleProtobufOptional>(),
      assert:
        typia.createAssert<typia.KebabCase<ObjectSimpleProtobufOptional>>(),
    });
