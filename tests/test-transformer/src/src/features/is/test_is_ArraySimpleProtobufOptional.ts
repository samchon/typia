import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_is_ArraySimpleProtobufOptional = (): void => _test_is(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)((input) => typia.is<ArraySimpleProtobufOptional>(input));
