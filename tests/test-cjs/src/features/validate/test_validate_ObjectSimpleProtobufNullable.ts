import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_validate_ObjectSimpleProtobufNullable = (): void =>
  _test_validate("ObjectSimpleProtobufNullable")<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable,
  )((input) => typia.validate<ObjectSimpleProtobufNullable>(input));
