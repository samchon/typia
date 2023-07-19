import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_protobuf_message_AtomicIntersection = _test_protobuf_message(
    "AtomicIntersection",
)(typia.protobuf.message<AtomicIntersection>());
