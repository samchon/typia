import typia from "../../../src";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagRangeBigInt = _test_protobuf_message(
    "TypeTagRangeBigInt",
)(typia.protobuf.message<TypeTagRangeBigInt>());