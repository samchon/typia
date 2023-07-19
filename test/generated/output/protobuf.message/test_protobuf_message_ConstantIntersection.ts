import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_protobuf_message_ConstantIntersection =
    _test_protobuf_message("ConstantIntersection")(
        'syntax = "proto3";\n\nmessage __Main {\n    _alt_false_comma__space_1_comma__space__doublequote_two_doublequote__agt_ value = 1;\n}\n\nmessage _alt_false_comma__space_1_comma__space__doublequote_two_doublequote__agt_ {\n    bool v0 = 1;\n    uint32 v1 = 2;\n    string v2 = 3;\n}',
    );
