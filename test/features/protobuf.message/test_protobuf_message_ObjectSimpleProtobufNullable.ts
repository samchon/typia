import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_message_ObjectSimpleProtobufNullable =
  _test_protobuf_message("ObjectSimpleProtobufNullable")(
    typia.protobuf.message<ObjectSimpleProtobufNullable>(),
  );
