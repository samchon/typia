import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_message_ObjectSimpleProtobufOptional =
    _test_protobuf_message("ObjectSimpleProtobufOptional")(
        typia.protobuf.message<ObjectSimpleProtobufOptional>(),
    );
