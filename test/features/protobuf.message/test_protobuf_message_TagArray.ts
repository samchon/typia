import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_message_TagArray = _test_protobuf_message(
    "TagArray",
)(typia.protobuf.message<TagArray>());
