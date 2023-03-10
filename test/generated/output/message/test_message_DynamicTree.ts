import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_message_DynamicTree = _test_message(
    "DynamicTree",
    'syntax = "proto3";\n\nmessage DynamicTree {\n    string id = 1;\n    double sequence = 2;\n    map<string, DynamicTree> children = 3;\n}',
);
