import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_message_ObjectSimple = _test_protobuf_message(
    "ObjectSimple",
)(typia.protobuf.message<ObjectSimple>());
