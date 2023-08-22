import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_message_TagInfinite = _test_protobuf_message(
    "TagInfinite",
)(typia.protobuf.message<TagInfinite>());
