import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_protobuf_message_ObjectAlias = _test_protobuf_message(
    "ObjectAlias",
)(
    'syntax = "proto3";\n\nmessage ObjectAlias {\n    message IMember {\n        optional string id = 1;\n        string email = 2;\n        string name = 3;\n        oneof sex {\n            uint32 sex_o0 = 4;\n            string sex_o1 = 5;\n        }\n        optional double age = 6;\n        optional bool dead = 7;\n    }\n}\n\nmessage __Main {\n    repeated ObjectAlias.IMember value = 1;\n}',
);
