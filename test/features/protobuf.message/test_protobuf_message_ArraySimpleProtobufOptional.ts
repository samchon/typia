import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_message_ArraySimpleProtobufOptional =
  _test_protobuf_message("ArraySimpleProtobufOptional")(
    typia.protobuf.message<ArraySimpleProtobufOptional>(),
  );
