import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_message_ObjectSimpleProtobuf =
  _test_protobuf_message("ObjectSimpleProtobuf")(
    typia.protobuf.message<ObjectSimpleProtobuf>(),
  );
