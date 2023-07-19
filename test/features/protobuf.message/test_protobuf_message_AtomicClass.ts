import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_protobuf_message_AtomicClass = _test_protobuf_message(
    "AtomicClass",
)(typia.protobuf.message<AtomicClass>());
