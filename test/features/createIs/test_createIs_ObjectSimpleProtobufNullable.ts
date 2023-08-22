import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_is_ObjectSimpleProtobufNullable = _test_is(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)(
    typia.createIs<ObjectSimpleProtobufNullable>(),
);
