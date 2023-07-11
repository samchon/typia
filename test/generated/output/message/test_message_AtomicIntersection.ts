import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_message_AtomicIntersection = _test_message(
    "AtomicIntersection",
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_boolean_comma__space_number_comma__space_string_agt_ value = 1;\n}\n\nmessage _alt_boolean_comma__space_number_comma__space_string_agt_ {\n    bool v0 = 1;\n    double v1 = 2;\n    string v2 = 3;\n}',
);
