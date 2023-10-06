import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_message_TypeTagInfinite = _test_protobuf_message(
    "TypeTagInfinite",
)(typia.protobuf.message<TypeTagInfinite>());
