import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_validate_ArraySimpleProtobufNullable = (): void => _test_validate(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)((input) => typia.validate<ArraySimpleProtobufNullable>(input));
