import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_protobuf_message_TagMatrix = _test_protobuf_message(
    "TagMatrix",
)(typia.protobuf.message<TagMatrix>());
