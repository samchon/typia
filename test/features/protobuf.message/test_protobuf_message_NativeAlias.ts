import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_protobuf_message_NativeAlias = _test_protobuf_message(
    "NativeAlias",
)(typia.protobuf.message<NativeAlias>());
