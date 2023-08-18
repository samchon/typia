import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagType } from "../../../structures/TagType";

export const test_protobuf_message_TagType = _test_protobuf_message("TagType")(
    'syntax = "proto3";\n\nmessage TagType {\n    repeated TagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n    }\n}',
);
