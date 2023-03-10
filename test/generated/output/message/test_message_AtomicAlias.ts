import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_message_AtomicAlias = _test_message(
    "AtomicAlias",
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_boolean_comma__space_number_comma__space_string_agt_ value = 1;\n}\n\nmessage _alt_boolean_comma__space_number_comma__space_string_agt_ {\n    bool v0 = 1;\n    double v1 = 2;\n    string v2 = 3;\n}',
);
