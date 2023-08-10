import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagStep } from "../../../structures/TagStep";

export const test_protobuf_message_TagStep = _test_protobuf_message("TagStep")(
    'syntax = "proto3";\n\nmessage TagStep {\n    repeated TagStep.Type value = 1;\n    message Type {\n        double exclusiveMinimum = 1;\n        double minimum = 2;\n        double range = 3;\n        double multipleOf = 4;\n    }\n}',
);
