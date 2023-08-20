import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_is_ArraySimpleProtobuf = _test_is<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
)(typia.createIs<ArraySimpleProtobuf>());
