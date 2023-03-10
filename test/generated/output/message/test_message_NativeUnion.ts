import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_message_NativeUnion = _test_message(
    "NativeUnion",
    'syntax = "proto3";\n\nmessage NativeUnion {\n    message Union {\n        optional __Timestamp date = 1;\n        bytes unsigned = 2;\n        bytes signed = 3;\n        bytes float = 4;\n        bytes buffer = 5;\n        bytes weak = 6;\n    }\n}\n\nmessage __Timestamp {\n    int64 seconds = 1;\n    int32 nanos = 2;\n}\n\nmessage __Main {\n    repeated NativeUnion.Union value = 1;\n}',
);
