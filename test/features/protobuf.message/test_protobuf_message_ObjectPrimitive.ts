import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectPrimitive = _test_protobuf_message(
    "ObjectPrimitive",
)(typia.protobuf.message<ObjectPrimitive>());