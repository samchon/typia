import typia from "../../../src";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectSimpleProtobufOptional = _test_protobuf_message(
    "ObjectSimpleProtobufOptional",
)(typia.protobuf.message<ObjectSimpleProtobufOptional>());