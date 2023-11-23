import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_notation_createValidatePascal_ObjectSimpleProtobufNullable =
  _test_notation_validateGeneral(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)<
    typia.PascalCase<ObjectSimpleProtobufNullable>
  >({
    convert:
      typia.notations.createValidatePascal<ObjectSimpleProtobufNullable>(),
    assert:
      typia.createAssert<typia.PascalCase<ObjectSimpleProtobufNullable>>(),
  });
