import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_protobuf_message_ConstantAtomicSimple =
    _test_protobuf_message(
        "ConstantAtomicSimple",
        'syntax = "proto3";\n\nmessage __Main {\n    _alt_false_comma__space_true_comma__space_2_comma__space__doublequote_three_doublequote__agt_ value = 1;\n}\n\nmessage _alt_false_comma__space_true_comma__space_2_comma__space__doublequote_three_doublequote__agt_ {\n    bool v0 = 1;\n    bool v1 = 2;\n    uint32 v2 = 3;\n    string v3 = 4;\n}',
    );
