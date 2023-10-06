import typia from "../../../src";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectPartialAndRequired = _test_protobuf_message(
    "ObjectPartialAndRequired",
)(typia.protobuf.message<ObjectPartialAndRequired>());