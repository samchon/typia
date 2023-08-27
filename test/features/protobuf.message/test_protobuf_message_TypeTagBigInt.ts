import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_message_TypeTagBigInt = _test_protobuf_message(
    "TypeTagBigInt",
)(typia.protobuf.message<TypeTagBigInt>());
