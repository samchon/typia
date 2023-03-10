import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_message_TagAtomicUnion = _test_message(
    "TagAtomicUnion",
    'syntax = "proto3";\n\nmessage TagAtomicUnion {\n    message Type {\n        oneof value {\n            string value_o0 = 1;\n            double value_o1 = 2;\n        }\n    }\n}\n\nmessage __Main {\n    repeated TagAtomicUnion.Type value = 1;\n}',
);
