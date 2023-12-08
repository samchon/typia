import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_notation_validatePascal_ObjectSimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
    typia.PascalCase<ObjectSimpleProtobufOptional>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectSimpleProtobufOptional>(input),
    assert:
      typia.createAssert<typia.PascalCase<ObjectSimpleProtobufOptional>>(),
  });
