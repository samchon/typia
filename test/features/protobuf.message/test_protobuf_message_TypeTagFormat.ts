import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_message_TypeTagFormat = _test_protobuf_message(
  "TypeTagFormat",
)(typia.protobuf.message<TypeTagFormat>());
