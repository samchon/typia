import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_assert_ObjectSimpleProtobufNullable = _test_assert(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)((input) =>
    typia.assert<ObjectSimpleProtobufNullable>(input),
);
