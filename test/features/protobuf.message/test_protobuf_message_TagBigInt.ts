import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_message_TagBigInt = _test_protobuf_message(
    "TagBigInt",
)(typia.protobuf.message<TagBigInt>());
