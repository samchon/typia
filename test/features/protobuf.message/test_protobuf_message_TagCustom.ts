import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_message_TagCustom = _test_protobuf_message(
    "TagCustom",
)(typia.protobuf.message<TagCustom>());
