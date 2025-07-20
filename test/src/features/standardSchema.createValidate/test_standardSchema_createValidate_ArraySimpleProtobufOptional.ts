import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_standardSchema_createValidate_ArraySimpleProtobufOptional =
  (): void =>
    _test_standardSchema_validate(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)(
      typia.createValidate<ArraySimpleProtobufOptional>(),
    );
