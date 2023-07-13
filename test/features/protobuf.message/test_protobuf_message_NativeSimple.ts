import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_protobuf_message_NativeSimple = _test_protobuf_message(
    "NativeSimple",
    typia.protobuf.message<NativeSimple>(),
);
