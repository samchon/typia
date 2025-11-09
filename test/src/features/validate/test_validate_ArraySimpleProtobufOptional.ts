import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_validate_ArraySimpleProtobufOptional = (): void =>
  _test_validate("ArraySimpleProtobufOptional")<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional,
  )((input) => typia.validate<ArraySimpleProtobufOptional>(input));
