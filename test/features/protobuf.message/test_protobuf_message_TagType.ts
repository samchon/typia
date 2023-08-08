import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagType } from "../../structures/TagType";

export const test_protobuf_message_TagType = _test_protobuf_message(
    "TagType",
    typia.protobuf.message<TagType>(),
);
