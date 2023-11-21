import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_message_ObjectGenericArray = _test_protobuf_message(
  "ObjectGenericArray",
)(typia.protobuf.message<ObjectGenericArray>());
