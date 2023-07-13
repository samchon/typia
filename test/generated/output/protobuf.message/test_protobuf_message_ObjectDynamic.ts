import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_protobuf_message_ObjectDynamic = _test_protobuf_message(
    "ObjectDynamic",
    'syntax = "proto3";\n\nmessage __Main {\n    map<string, ObjectDynamic.__Wrapper> value = 1;\n}\n\nmessage ObjectDynamic {\n    message __Wrapper {\n        oneof value {\n            string value_o0 = 1;\n            double value_o1 = 2;\n            bool value_o2 = 3;\n        }\n    }\n}',
);
