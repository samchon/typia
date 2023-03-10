import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagRange } from "../../../structures/TagRange";

export const test_message_TagRange = _test_message(
    "TagRange",
    'syntax = "proto3";\n\nmessage TagRange {\n    message Type {\n        double greater = 1;\n        double greater_equal = 2;\n        double less = 3;\n        double less_equal = 4;\n        double greater_less = 5;\n        double greater_equal_less = 6;\n        double greater_less_equal = 7;\n        double greater_equal_less_equal = 8;\n    }\n}\n\nmessage __Main {\n    repeated TagRange.Type value = 1;\n}',
);
