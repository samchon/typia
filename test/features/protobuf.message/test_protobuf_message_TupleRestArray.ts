import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_protobuf_message_TupleRestArray = _test_protobuf_message(
    "TupleRestArray",
)(typia.protobuf.message<TupleRestArray>());
