import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_message_DynamicConstant = _test_protobuf_message(
  "DynamicConstant",
)(typia.protobuf.message<DynamicConstant>());
