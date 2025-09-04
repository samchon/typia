import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_standardSchema_createValidate_ObjectSimpleProtobuf =
  (): void =>
    _test_standardSchema_validate("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
      ObjectSimpleProtobuf,
    )(typia.createValidate<ObjectSimpleProtobuf>());
