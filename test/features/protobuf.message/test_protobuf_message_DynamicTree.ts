import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_message_DynamicTree = _test_protobuf_message(
    "DynamicTree",
)(typia.protobuf.message<DynamicTree>());
