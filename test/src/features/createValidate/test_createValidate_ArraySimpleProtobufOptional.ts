import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createValidate_ArraySimpleProtobufOptional = _test_validate(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)(typia.createValidate<ArraySimpleProtobufOptional>());
