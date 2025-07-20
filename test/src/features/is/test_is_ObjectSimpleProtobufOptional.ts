import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_is_ObjectSimpleProtobufOptional = (): void =>
  _test_is("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional,
  )((input) => typia.is<ObjectSimpleProtobufOptional>(input));
