import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_protobuf_message_AtomicAlias = _test_protobuf_message(
    "AtomicAlias",
)(typia.protobuf.message<AtomicAlias>());
