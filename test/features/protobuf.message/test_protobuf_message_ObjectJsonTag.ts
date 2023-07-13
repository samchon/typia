import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_message_ObjectJsonTag = _test_protobuf_message(
    "ObjectJsonTag",
    typia.protobuf.message<ObjectJsonTag>(),
);
