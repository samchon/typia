import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_protobuf_message_ArrayRepeatedUnionWithTuple =
    _test_protobuf_message(
        "ArrayRepeatedUnionWithTuple",
        typia.protobuf.message<ArrayRepeatedUnionWithTuple>(),
    );
