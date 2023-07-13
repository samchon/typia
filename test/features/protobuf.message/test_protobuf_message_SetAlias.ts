import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { SetAlias } from "../../structures/SetAlias";

export const test_protobuf_message_SetAlias = _test_protobuf_message(
    "SetAlias",
    typia.protobuf.message<SetAlias>(),
);
