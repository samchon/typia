import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_protobuf_message_ObjectTuple = _test_protobuf_message(
    "ObjectTuple",
)(typia.protobuf.message<ObjectTuple>());
