import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_message_TypeTagAtomicUnion = _test_protobuf_message(
    "TypeTagAtomicUnion",
)(typia.protobuf.message<TypeTagAtomicUnion>());
