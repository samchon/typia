import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_message_TagTypeBigInt = _test_protobuf_message(
    "TagTypeBigInt",
)(typia.protobuf.message<TagTypeBigInt>());
