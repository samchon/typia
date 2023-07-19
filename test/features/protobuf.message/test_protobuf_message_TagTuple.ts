import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagTuple } from "../../structures/TagTuple";

export const test_protobuf_message_TagTuple = _test_protobuf_message(
    "TagTuple",
)(typia.protobuf.message<TagTuple>());
