import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_message_TagPattern = _test_protobuf_message(
    "TagPattern",
    typia.protobuf.message<TagPattern>(),
);
