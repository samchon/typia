import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_standardSchema_createValidate_ArraySimpleProtobuf = (): void => _test_standardSchema_validate(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)(typia.createValidate<ArraySimpleProtobuf>());
