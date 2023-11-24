import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_validatePascal_ObjectSimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
    typia.PascalCase<ObjectSimpleProtobufNullable>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectSimpleProtobufNullable>(input),
    assert:
      typia.createAssert<typia.PascalCase<ObjectSimpleProtobufNullable>>(),
  });
