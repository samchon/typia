import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_assert_ArraySimpleProtobufOptional = _test_assert(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)((input) =>
    typia.assert<ArraySimpleProtobufOptional>(input),
);
