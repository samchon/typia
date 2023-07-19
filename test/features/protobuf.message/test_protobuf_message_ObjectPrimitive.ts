import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_message_ObjectPrimitive = _test_protobuf_message(
    "ObjectPrimitive",
)(typia.protobuf.message<ObjectPrimitive>());
