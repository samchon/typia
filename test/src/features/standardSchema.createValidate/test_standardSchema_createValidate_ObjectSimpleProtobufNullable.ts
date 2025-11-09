import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_standardSchema_createValidate_ObjectSimpleProtobufNullable =
  (): void =>
    _test_standardSchema_validate(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)(
      typia.createValidate<ObjectSimpleProtobufNullable>(),
    );
