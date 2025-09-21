import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_createValidateKebab_ObjectSimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
      typia.KebabCase<ObjectSimpleProtobufNullable>
    >({
      convert:
        typia.notations.createValidateKebab<ObjectSimpleProtobufNullable>(),
      assert:
        typia.createAssert<typia.KebabCase<ObjectSimpleProtobufNullable>>(),
    });
