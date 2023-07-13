import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_message_TagLength = _test_protobuf_message(
    "TagLength",
    typia.protobuf.message<TagLength>(),
);
