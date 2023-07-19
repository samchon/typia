import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_message_TagFormat = _test_protobuf_message(
    "TagFormat",
)(typia.protobuf.message<TagFormat>());
