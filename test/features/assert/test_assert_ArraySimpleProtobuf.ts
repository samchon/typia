import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_assert_ArraySimpleProtobuf = _test_assert(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)((input) => typia.assert<ArraySimpleProtobuf>(input));
