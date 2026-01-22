import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_is_ObjectSimpleProtobufNullable = (): void =>
  _test_is("ObjectSimpleProtobufNullable")<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable,
  )((input) => typia.is<ObjectSimpleProtobufNullable>(input));
