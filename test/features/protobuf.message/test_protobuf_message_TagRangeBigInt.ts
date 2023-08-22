import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_message_TagRangeBigInt = _test_protobuf_message(
    "TagRangeBigInt",
)(typia.protobuf.message<TagRangeBigInt>());
