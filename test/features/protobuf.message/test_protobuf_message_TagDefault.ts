import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_message_TagDefault = _test_protobuf_message(
    "TagDefault",
    typia.protobuf.message<TagDefault>(),
);
