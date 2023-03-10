import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_message_DynamicTemplate = _test_message(
    "DynamicTemplate",
    'syntax = "proto3";\n\nmessage __Main {\n    map<string, DynamicTemplate.__Wrapper> value = 1;\n}\n\nmessage DynamicTemplate {\n    message __Wrapper {\n        oneof value {\n            string value_o0 = 1;\n            double value_o1 = 2;\n            bool value_o2 = 3;\n        }\n    }\n}',
);
