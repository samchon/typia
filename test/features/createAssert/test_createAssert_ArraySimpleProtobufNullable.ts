import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createAssert_ArraySimpleProtobufNullable = _test_assert(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)(
    typia.createAssert<ArraySimpleProtobufNullable>(),
);
