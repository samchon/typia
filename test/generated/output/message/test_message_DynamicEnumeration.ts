import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_message_DynamicEnumeration = _test_message(
    "DynamicEnumeration",
    'syntax = "proto3";\n\nmessage DynamicEnumeration {\n    optional string ar = 1;\n    optional string v3 = 2;\n    optional string v4 = 3;\n    optional string en = 4;\n    optional string fr = 5;\n    optional string de = 6;\n    optional string ja = 7;\n    optional string ko = 8;\n    optional string pt = 9;\n    optional string ru = 10;\n}',
);
