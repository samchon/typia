import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_message_TypeTagLength = _test_protobuf_message(
    "TypeTagLength",
)(typia.protobuf.message<TypeTagLength>());
