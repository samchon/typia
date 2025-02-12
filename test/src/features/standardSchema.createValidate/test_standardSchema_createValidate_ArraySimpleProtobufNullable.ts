import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_standardSchema_createValidate_ArraySimpleProtobufNullable = _test_standardSchema_validate(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)(typia.createValidate<ArraySimpleProtobufNullable>());
