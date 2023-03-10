import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_message_DynamicArray = _test_message(
    "DynamicArray",
    'syntax = "proto3";\n\nmessage __Main {\n    map<string, DynamicArray.__Wrapper> value = 1;\n}\n\nmessage DynamicArray {\n    message __Wrapper {\n        repeated string value = 1;\n    }\n}',
);
