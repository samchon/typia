import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_is_ArraySimpleProtobufOptional = _test_is(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)((input) => typia.is<ArraySimpleProtobufOptional>(input));
