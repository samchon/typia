import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_DynamicConstant = _test_protobuf_message(
    "DynamicConstant",
)(typia.protobuf.message<DynamicConstant>());