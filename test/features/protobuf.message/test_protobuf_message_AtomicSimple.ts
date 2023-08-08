import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_protobuf_message_AtomicSimple = _test_protobuf_message(
    "AtomicSimple",
    typia.protobuf.message<AtomicSimple>(),
);
