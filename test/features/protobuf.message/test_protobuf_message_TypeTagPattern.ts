import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_message_TypeTagPattern = _test_protobuf_message(
  "TypeTagPattern",
)(typia.protobuf.message<TypeTagPattern>());
