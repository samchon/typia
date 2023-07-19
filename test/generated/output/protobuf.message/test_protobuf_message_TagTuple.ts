import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagTuple } from "../../../structures/TagTuple";

export const test_protobuf_message_TagTuple = _test_protobuf_message(
    "TagTuple",
)(
    'syntax = "proto3";\n\nmessage TagTuple {\n    _alt_string_comma__space_number_comma__space_Array_lt_string_gt__comma__space_Array_lt_number_gt__agt_ tuple = 1;\n}\n\nmessage _alt_string_comma__space_number_comma__space_Array_lt_string_gt__comma__space_Array_lt_number_gt__agt_ {\n    string v0 = 1;\n    double v1 = 2;\n    repeated string v2 = 3;\n    repeated double v3 = 4;\n}',
);
