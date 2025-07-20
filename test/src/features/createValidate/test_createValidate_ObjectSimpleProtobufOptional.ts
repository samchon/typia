import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createValidate_ObjectSimpleProtobufOptional = (): void =>
  _test_validate("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional,
  )(typia.createValidate<ObjectSimpleProtobufOptional>());
