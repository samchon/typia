import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_message_ObjectOptional = _test_protobuf_message(
    "ObjectOptional",
)(typia.protobuf.message<ObjectOptional>());
