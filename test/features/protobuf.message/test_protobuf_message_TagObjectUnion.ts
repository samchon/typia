import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_protobuf_message_TagObjectUnion = _test_protobuf_message(
    "TagObjectUnion",
)(typia.protobuf.message<TagObjectUnion>());
