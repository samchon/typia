import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_validateKebab_ObjectSimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
      typia.KebabCase<ObjectSimpleProtobufNullable>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ObjectSimpleProtobufNullable>(input),
      assert:
        typia.createAssert<typia.KebabCase<ObjectSimpleProtobufNullable>>(),
    });
