import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_createValidateKebab_ObjectSimpleProtobuf =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSimpleProtobuf",
    )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)<
      typia.KebabCase<ObjectSimpleProtobuf>
    >({
      convert: typia.notations.createValidateKebab<ObjectSimpleProtobuf>(),
      assert: typia.createAssert<typia.KebabCase<ObjectSimpleProtobuf>>(),
    });
