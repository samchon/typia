import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicTree = _test_message(
    "DynamicTree",
    TSON.message<DynamicTree>(),
    `syntax = \"proto3\";

message DynamicTree {
    string id = 1;
    double sequence = 2;
    map<string, DynamicTree> children = 3;
}

message Record_lt_string_comma__space_DynamicTree_gt_ {
}`,
);
