import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_protobuf_message_ObjectTuple = _test_protobuf_message(
    "ObjectTuple",
    'syntax = "proto3";\n\nmessage ObjectTuple {\n    message ISection {\n        string id = 1;\n        string code = 2;\n        string name = 3;\n    }\n\n    message ICitizen {\n        string id = 1;\n        string mobile = 2;\n        string name = 3;\n    }\n}\n\nmessage __Main {\n    _alt_ObjectTuple.ISection_comma__space_ObjectTuple.ICitizen_agt_ value = 1;\n}\n\nmessage _alt_ObjectTuple {\n    message ISection_comma__space_ObjectTuple {\n        message ICitizen_agt_ {\n            ObjectTuple.ISection v0 = 1;\n            ObjectTuple.ICitizen v1 = 2;\n        }\n    }\n}',
);
