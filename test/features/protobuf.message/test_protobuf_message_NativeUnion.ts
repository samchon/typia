import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_protobuf_message_NativeUnion = _test_protobuf_message(
    "NativeUnion",
)(typia.protobuf.message<NativeUnion>());
