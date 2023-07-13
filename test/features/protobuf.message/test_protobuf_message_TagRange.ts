import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_message_TagRange = _test_protobuf_message(
    "TagRange",
    typia.protobuf.message<TagRange>(),
);
