import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_protobuf_message_ObjectGeneric = _test_protobuf_message(
    "ObjectGeneric",
)(typia.protobuf.message<ObjectGeneric>());
