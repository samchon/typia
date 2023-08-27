import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_message_TypeTagTypeBigInt = _test_protobuf_message(
    "TypeTagTypeBigInt",
)(typia.protobuf.message<TypeTagTypeBigInt>());
