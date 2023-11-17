import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_message_ObjectNullable = _test_protobuf_message(
  "ObjectNullable",
)(typia.protobuf.message<ObjectNullable>());
