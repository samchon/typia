import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_protobuf_message_AtomicUnion = _test_protobuf_message(
    "AtomicUnion",
)(typia.protobuf.message<AtomicUnion>());
