import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_notation_createValidateKebab_ObjectSequenceProtobuf =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectSequenceProtobuf",
    )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)<
      typia.KebabCase<ObjectSequenceProtobuf>
    >({
      convert: typia.notations.createValidateKebab<ObjectSequenceProtobuf>(),
      assert: typia.createAssert<typia.KebabCase<ObjectSequenceProtobuf>>(),
    });
