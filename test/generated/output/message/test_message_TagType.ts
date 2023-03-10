import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagType } from "../../../structures/TagType";

export const test_message_TagType = _test_message(
    "TagType",
    'syntax = "proto3";\n\nmessage TagType {\n    message Type {\n        int32 int = 1;\n        uint32 uint = 2;\n    }\n}\n\nmessage __Main {\n    repeated TagType.Type value = 1;\n}',
);
