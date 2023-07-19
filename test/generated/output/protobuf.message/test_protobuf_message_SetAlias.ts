import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { SetAlias } from "../../../structures/SetAlias";

export const test_protobuf_message_SetAlias = _test_protobuf_message(
    "SetAlias",
)(
    'syntax = "proto3";\n\nmessage SetAlias {\n    repeated bool booleans = 1;\n    repeated double numbers = 2;\n    repeated string strings = 3;\n    repeated Set.Element_lt_Array_lt_number_gt__gt_ arrays = 4;\n    repeated SetAlias.Person objects = 5;\n\n\n    message Person {\n        string id = 1;\n        string name = 2;\n        double age = 3;\n    }\n}\n\nmessage Set {\n    message Element_lt_Array_lt_number_gt__gt_ {\n        repeated double value = 1;\n    }\n}',
);
